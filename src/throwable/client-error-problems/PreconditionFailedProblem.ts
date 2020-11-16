import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_PRECONDITION_FAILED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class PreconditionFailedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_PRECONDITION_FAILED, headers)
    Object.setPrototypeOf(this, PreconditionFailedProblem.prototype)
  }
}
