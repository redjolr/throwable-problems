import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_NOT_IMPLEMENTED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class NotImplementedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_NOT_IMPLEMENTED, headers)
    Object.setPrototypeOf(this, NotImplementedProblem.prototype)
  }
}
