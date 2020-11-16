import { ErrorSpecificProblemDetails } from '../../definitions/ErrorSpecificProblemDetails'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HTTP_REQUEST_TIMEOUT } from 'throwable-http-exceptions'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class RequestTimeoutProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: HttpHeaders = {},
  ) {
    super(details, HTTP_REQUEST_TIMEOUT, { ...headers, Connection: 'close' })
    Object.setPrototypeOf(this, RequestTimeoutProblem.prototype)
  }
}
