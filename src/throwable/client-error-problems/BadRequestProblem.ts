import { BadRequestProblemDetails, HttpHeaders } from '../../definitions'
import { HTTP_BAD_REQUEST } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'

export class BadRequestProblem extends ErrorSpecificProblem {
  constructor (
    details: BadRequestProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_BAD_REQUEST, headers)
    Object.setPrototypeOf(this, BadRequestProblem.prototype)
  }
}
