import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_CONFLICT } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class ConflictProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_CONFLICT, headers)
    Object.setPrototypeOf(this, ConflictProblem.prototype)
  }
}
