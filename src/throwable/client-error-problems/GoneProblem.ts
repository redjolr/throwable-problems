import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_GONE } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class GoneProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_GONE, headers)
    Object.setPrototypeOf(this, GoneProblem.prototype)
  }
}
