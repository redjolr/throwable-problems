import { ErrorSpecificProblemDetails, HttpHeaders } from '../../definitions'
import { HTTP_NOT_FOUND } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'

export class NotFoundProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_NOT_FOUND, headers)
    Object.setPrototypeOf(this, NotFoundProblem.prototype)
  }
}
