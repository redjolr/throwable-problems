
import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_EXPECTATION_FAILED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class ExpectationFailedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_EXPECTATION_FAILED, headers)
    Object.setPrototypeOf(this, ExpectationFailedProblem.prototype)
  }
}
