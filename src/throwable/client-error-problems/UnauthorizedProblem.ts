import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_UNAUTHORIZED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { UnauthorizedProblemHeaders } from '../../definitions/problem-headers'

export class UnauthorizedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: UnauthorizedProblemHeaders,
  ) {
    super(details, HTTP_UNAUTHORIZED, headers)
    Object.setPrototypeOf(this, UnauthorizedProblem.prototype)
  }
}
