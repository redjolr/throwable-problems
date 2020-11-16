import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_LENGTH_REQUIRED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class LengthRequiredProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_LENGTH_REQUIRED, headers)
    Object.setPrototypeOf(this, LengthRequiredProblem.prototype)
  }
}
