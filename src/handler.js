/**
 * handler.js - Main Lambda entry point
 * @param {object} event
 * @param {object} context
 * @param {function} done
 * @flow
 */
const logger = require('./lib/logger')
const getEventType = require('./lib/getEventType')

const echo = (event: Object, context: Object, done: Function) => {
  try {
    const payload = {
      env: process.env,
      event: event,
      context: context
    }
    logger.debug('echo', JSON.stringify(payload, null, 2))
    if (getEventType(event) === 'http') {
      done(null, {
        statusCode: 200,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      })
    }
  } catch (ex) {
    logger.error('echo', ex)
    done(ex)
  }
} // echo

module.exports = {
  echo
}
