import fs from 'fs';
import Contribution from '#models/contribution'
import Deadline from '#models/deadline'
import Faculty from '#models/faculty'
import Fileupload from '#models/fileupload'
import Submission from '#models/submission'
import { PostSubmissionForm, PutSubmissionForm, PutSubmissionStatusForm } from '#validators/submmission'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { MultipartFile } from '@adonisjs/core/bodyparser';
import JSZip from 'jszip';
import { DateTime } from 'luxon';

export default class SubmmissionsController {
    Get = async ({ response, auth }: HttpContext) => {
        let submission = Submission.query().preload('user').preload('comment').preload('fileupload').preload('status')
        if (auth.isAuthenticated) {
            if (auth.user?.roleId == 4 || auth.user?.roleId == 5) {
                submission.where('status_id', 2)
            }
        }
        let submission1 = await submission
        return response.send(submission1)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().where('id', id).preload('fileupload').preload('user').preload('status').first()
        return response.send(submission)
    }
    GetByDeadlineId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let submission = await Submission.query().preload('fileupload').preload('user').preload('comment').where('deadline_id', id)
        return response.send(submission)
    }
    DownloadFile = async ({ response, request }: HttpContext) => {
        const id = request.param('id');
        let submission = await Submission.query().where('id', id).preload('fileupload').first();
        var zip = new JSZip();



        if (submission && submission.fileupload && Array.isArray(submission.fileupload)) {
            for (const fileupload of submission.fileupload) {
                try {
                    const file = await fs.readFileSync(fileupload.filePath);
               
                    zip.file(`${submission.title}/${fileupload.fileName}`, file, { binary: true });
                } catch (e) {
                    console.log(e);
                }
            }
        }
        let filename = submission?.title ||'download';
        let content = await zip.generateAsync({ type: "nodebuffer", compression: 'DEFLATE' });

        response.header('Content-Type', 'application/zip');
        response.header(
            'Content-disposition',
            `attachment; filename=${filename}.zip`
        );

        // Send the response after generating the zip file
        return response.send(content);
    }
    Post = async ({ response, request, auth }: HttpContext) => {

        const payload = await request.validateUsing(PostSubmissionForm)
        const submission = new Submission()
        submission.title = payload.title
        submission.content = payload.content
        submission.deadlineId = payload.deadlineid
        submission.userId = auth.user?.id || -1
        submission.statusId = 1


        if (Array.isArray(payload.file)) {
            payload.file.map(async (x) => {

            })
        }

        await submission.save()

        return submission

    }

    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PutSubmissionForm)
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(422).send({
                errors: [{
                    message: `Submission not found`
                }]
            })

        }
        submission.title = payload.title
        submission.content = payload.content
        submission.statusId = payload.statusid
        if (payload.file) {
            payload.file.map(async (x) => {
                await x.move(app.makePath('public/uploads'))
                const fileupload = new Fileupload()
                fileupload.fileName = x.fileName || "image"
                fileupload.filePath = x.filePath || ""
                fileupload.submissionId = submission.id

                await submission.related('fileupload').create(fileupload)
            })
        }


        await submission.save()
        return submission

    }
    PutStatus = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PutSubmissionStatusForm)
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(422).send({
                errors: [{
                    message: `Submission not found`
                }]
            })

        }
        submission.statusId = payload.statusid
        console.log(1)

        await submission.save()
        console.log(submission)
        return submission

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const submission = await Submission.find(id)
        if (!submission) {
            return response.status(422).send({
                errors: [{
                    message: `Submission not found`
                }]
            })
        }
        await submission.delete()

        return ['', 200]

    }
    DeleteFile = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const fileupload = await Fileupload.find(id)
        if (!fileupload) {
            return response.status(422).send({
                errors: [{
                    message: `File not found`
                }]
            })
        }
        fs.unlinkSync(fileupload.filePath)
        await fileupload.delete()

        return ['', 200]

    }
}