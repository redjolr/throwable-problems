import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_SERVICE_UNAVAILABLE } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class ServiceUnavailableProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_SERVICE_UNAVAILABLE, headers)
    Object.setPrototypeOf(this, ServiceUnavailableProblem.prototype)
  }
}
