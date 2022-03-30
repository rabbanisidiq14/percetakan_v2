import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RenameTableTokens extends BaseSchema {
  public async up() {
    this.schema.renameTable('tokens', 'api_tokens')
  }

  public async down() {
    this.schema.renameTable('api_tokens', 'tokens')
  }
}
