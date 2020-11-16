import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_PRECONDITION_REQUIRED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class PreconditionRequiredProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_PRECONDITION_REQUIRED, headers)
    Object.setPrototypeOf(this, PreconditionRequiredProblem.prototype)
  }
}
