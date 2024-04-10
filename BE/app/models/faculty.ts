import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Contribution from './contribution.js'

export default class Faculty extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare name:string
  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(()=>Contribution)
  declare contribution :HasMany<typeof Contribution>

  @column()
  declare isrequest: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}