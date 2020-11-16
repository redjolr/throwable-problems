import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_HTTP_VERSION_NOT_SUPPORTED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class HTTPVersionNotSupportedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_HTTP_VERSION_NOT_SUPPORTED, headers)
    Object.setPrototypeOf(this, HTTPVersionNotSupportedProblem.prototype)
  }
}
