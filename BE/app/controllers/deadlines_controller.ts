 import Deadline from '#models/deadline'
import { PostDeadlineForm, PutDeadlineForm } from '#validators/deadline'
import type { HttpContext } from '@adonisjs/core/http'

export default class DeadlinesController {
    Get = async ({ response }: HttpContext) => {
        let deadline = await Deadline.query().preload('contribution')
        return response.send(deadline)
    }
    GetById = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        let deadline = await Deadline.query().where('id', id).preload('contribution').first()
        return response.send(deadline)
    }
    Post = async ({ response, request }: HttpContext) => {
        const payload = await request.validateUsing(PostDeadlineForm)
        const deadline = new Deadline()

        deadline.name = payload.name
        deadline.closureDate=payload.closuredate
        deadline.finalclosureDate = payload.finalclosuredate
        deadline.contributionId = payload.contributionid
        deadline.description = payload.description ||''
        await deadline.save()

        return deadline

    }

    Put = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const payload = await request.validateUsing(PostDeadlineForm)
        const deadline = await Deadline.find(id)
        if (!deadline) {
            return response.status(422).send({
                errors:[{
                    message:`deadline not found`
                }]
            })

        }
        deadline.name = payload.name
        deadline.closureDate = payload.closuredate
        deadline.finalclosureDate= payload.finalclosuredate
        deadline.description = payload.description ||''
        deadline.contributionId = payload.contributionid
        await deadline.save()
        return deadline

    }
    Delete = async ({ response, request }: HttpContext) => {
        const id = request.param('id')
        const deadline = await Deadline.find(id)
        if (!deadline) {
            return response.status(422).send({
                errors:[{
                    message:`Deadline not found`
                }]
            })
       
        }
        await deadline.delete()

        return ['', 200]

    }
}