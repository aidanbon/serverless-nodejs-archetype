/**
 * logger: wrapper for logging error or debug message
 * @flow
 */

const error = (tag: string, mesg: string) => {
  console.log(`[ERROR ${tag}] ${mesg}`)
}

const debug = (tag: string, mesg: string) => {
  if (process.env.LOG === 'ERROR_ONLY') {
    return // no op
  }
  console.log(`[${tag}] ${mesg}`)
}

module.exports = {
  error,
  debug
}
