import { ErrorSpecificProblemDetails } from '../../definitions/ErrorSpecificProblemDetails'
import { ProxyAuthenticationRequiredProblemHeaders } from '../../definitions/problem-headers'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HTTP_PROXY_AUTHENTICATION_REQUIRED } from 'throwable-http-exceptions'

export class ProxyAuthenticationRequiredProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: ProxyAuthenticationRequiredProblemHeaders,
  ) {
    super(details, HTTP_PROXY_AUTHENTICATION_REQUIRED, headers)
    Object.setPrototypeOf(this, ProxyAuthenticationRequiredProblem.prototype)
  }
}
