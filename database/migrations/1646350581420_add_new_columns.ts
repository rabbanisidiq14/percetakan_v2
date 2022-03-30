import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tokens extends BaseSchema {
  protected tableName = 'tokens'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name').after('id')
      table.timestamp('expires_at').nullable().after('is_revoked')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('expires_at')
      table.dropColumn('name')
    })
  }
}
