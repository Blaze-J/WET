import vine from '@vinejs/vine'
import { VineDateTime } from './dateTimeSchema.js'
import { exists } from './helpers/db.js'
import Contribution from '#models/contribution'
import Deadline from '#models/deadline'
export const PostDeadlineForm = vine.compile(
    vine.object({
        name:vine.string(),
        contributionid:vine.number().exists(exists(Contribution.table,Contribution.primaryKey)),
        description:vine.string().nullable(),
        closuredate: new VineDateTime,
        finalclosuredate:new VineDateTime,
    })

)
export const PutDeadlineForm = vine.compile(
    vine.object({
        name:vine.string(),
        deadlineid:vine.number().exists(exists(Deadline.table,Deadline.primaryKey)),
        description:vine.string().nullable(),
        closuredate: new VineDateTime,
        finalclosuredate:new VineDateTime,
    })

)
