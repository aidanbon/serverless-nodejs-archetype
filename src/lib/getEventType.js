/**
 * getEventType: return the event type for the given event object
 * @param {Object} event
 * @flow
 */
const getEventType = (event: Object) => {
  if (!event) {
    throw String('event object is undefined')
  }
  if (event.requestContext && event.requestContext.httpMethod) {
    return 'http'
  } else if (event.Records && event.Records[0] && event.Records[0].s3) {
    return 'aws:s3'
  } else {
    throw String(`Unknown event type: ${JSON.stringify(event, null, 2)}`)
  }
}

module.exports = getEventType
