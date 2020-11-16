import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_LOCKED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class LockedProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_LOCKED, headers)
    Object.setPrototypeOf(this, LockedProblem.prototype)
  }
}
