import { BaseSchema } from '@adonisjs/lucid/schema';


export default class extends BaseSchema {
  protected tableName = 'contributions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('file_path')
      table.string('file_name')
      table.string('title')
      table.string('content')
      table.integer('user_id').references('id').inTable('users').notNullable().unsigned()
      table.integer('faculty_id').references('id').inTable('faculties').notNullable().unsigned()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}