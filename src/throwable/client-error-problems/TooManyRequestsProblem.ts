import { ErrorSpecificProblemDetails, TooManyRequestsHeaders } from '../../definitions'
import { HTTP_TOO_MANY_REQUESTS, retryAfter } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'

export class TooManyRequestsProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: TooManyRequestsHeaders = {},
  ) {
    super(
      details,
      HTTP_TOO_MANY_REQUESTS,
      headers['Retry-After'] ?
        { ...headers, 'Retry-After': retryAfter(headers['Retry-After']) } :
        headers,
    )
    Object.setPrototypeOf(this, TooManyRequestsProblem.prototype)
  }
}
