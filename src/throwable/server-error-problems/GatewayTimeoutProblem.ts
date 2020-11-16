import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_GATEWAY_TIMEOUT } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class GatewayTimeoutProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_GATEWAY_TIMEOUT, headers)
    Object.setPrototypeOf(this, GatewayTimeoutProblem.prototype)
  }
}
