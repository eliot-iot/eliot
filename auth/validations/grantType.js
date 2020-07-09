const createError = require('http-errors')

/**
 * Grant Type validation
 *
 */
module.exports = {
  before: async (handler) => {
    handler.event.body = handler.event.body || {}
    const grantType = handler.event.body.grant_type

    if (grantType !== 'authorization_code' && grantType !== 'refresh_token') {
      throw new createError.BadRequest('invalid_grant')
    }
  }
}
