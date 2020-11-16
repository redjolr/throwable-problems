import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_TOO_EARLY } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class TooEarlyProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_TOO_EARLY, headers)
    Object.setPrototypeOf(this, TooEarlyProblem.prototype)
  }
}
