import { ErrorSpecificProblemDetails, MethodNotAllowedProblemHeaders } from '../../definitions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HTTP_METHOD_NOT_ALLOWED } from 'throwable-http-exceptions'

export class MethodNotAllowedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: MethodNotAllowedProblemHeaders,
  ) {
    super(details, HTTP_METHOD_NOT_ALLOWED, headers)
    Object.setPrototypeOf(this, MethodNotAllowedProblem.prototype)
  }
}
