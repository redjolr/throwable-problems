import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_URI_TOO_LONG } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class URITooLongProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_URI_TOO_LONG, headers)
    Object.setPrototypeOf(this, URITooLongProblem.prototype)
  }
}
