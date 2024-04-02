import Contribution from '#models/contribution'
import { PostContributionForm } from '#validators/contribution'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ContributionsController {
    Get = async ({ response }: HttpContext) => {
        let contribution = await Contribution.query().preload('user').preload('faculty')
        return response.send(contribution)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('user').preload('faculty').where('id', id).first()
        return response.send(contribution)
    }

    GetByStudent = async ({ response, request,auth }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('user').preload('faculty').where('faculty_id', id).where('user_id',auth.user?.id ||'-1')
        return response.send(contribution)
    }

    GetByfacId = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let contribution = await Contribution.query().preload('user').preload('faculty',(x)=>x.where('id',id))
        return response.send(contribution)
    }
    Post = async ({ response, request, auth }: HttpContext) => {
        const payload = await request.validateUsing(PostContributionForm)
        const contribution = new Contribution()
        contribution.userId = auth.user?.id || -1
        contribution.facultyId = payload.facultyid
        contribution.content = payload.content
        contribution.title =payload.title
        await payload.file.move(app.makePath('public/uploads'))
        contribution.filePath = `uploads/${payload.file.fileName}` || 'nul'
        contribution.fileName = payload.file.fileName ||'null'
        await contribution.save()

        return contribution

    }
    // Put = async ({ response, request }: HttpContext) => {
    //     const id = request.param('id')
    //     const payload = await request.validateUsing(PostFacultyForm)
    //     const faculty = await Faculty.find(id)
    //     if (!faculty) {
    //         return response.status(400).send(`Faculty not found`)
    //     }
    //     faculty.name = payload.name
    //     faculty.userId = payload.userid
    //     faculty.closureDate = payload.closuredate
    //     faculty.finalclosureDate = payload.finalclosuredate

    //     await faculty.save()
    //     return faculty

    // }
    // Delete = async ({ response, request }: HttpContext) => {
    //     const id = request.param('id')
    //     const faculty = await Faculty.find(id)
    //     if (!faculty) {
    //         return response.status(400).send(`Faculty not found`)
    //     }
    //     await faculty.delete()

    //     return ['', 200]

    // }
}