import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_MISDIRECTED_REQUEST } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class MisdirectedRequestProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_MISDIRECTED_REQUEST, headers)
    Object.setPrototypeOf(this, MisdirectedRequestProblem.prototype)
  }
}
