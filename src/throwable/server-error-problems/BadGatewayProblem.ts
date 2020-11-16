import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_BAD_GATEWAY } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class BadGatewayProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_BAD_GATEWAY, headers)
    Object.setPrototypeOf(this, BadGatewayProblem.prototype)
  }
}
