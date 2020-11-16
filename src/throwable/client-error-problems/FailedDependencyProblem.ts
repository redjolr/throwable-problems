import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_FAILED_DEPENDENCY } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class FailedDependencyProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_FAILED_DEPENDENCY, headers)
    Object.setPrototypeOf(this, FailedDependencyProblem.prototype)
  }
}
