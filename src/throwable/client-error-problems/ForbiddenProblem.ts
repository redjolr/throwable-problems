import { ErrorSpecificProblemDetails, HttpHeaders } from '../../definitions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HTTP_FORBIDDEN } from 'throwable-http-exceptions'

export class ForbiddenProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_FORBIDDEN, headers)
    Object.setPrototypeOf(this, ForbiddenProblem.prototype)
  }
}
