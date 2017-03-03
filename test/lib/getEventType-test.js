
const expect = require('chai').expect
const getEventType = require('../../dist/lib/getEventType')

describe('getEventType-test', () => {
  it ('should return the http event type', done => {
    const eventObj = require('../events/http-post.json')
    const res = getEventType(eventObj)
    expect(res).to.equal('http')
    done()
  })
})