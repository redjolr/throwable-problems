import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_INTERNAL_SERVER_ERROR } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class InternalServerErrorProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_INTERNAL_SERVER_ERROR, headers)
    Object.setPrototypeOf(this, InternalServerErrorProblem.prototype)
  }
}
