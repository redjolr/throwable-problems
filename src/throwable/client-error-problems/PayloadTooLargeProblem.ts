import { ErrorSpecificProblemDetails, PayloadTooLargeHeaders } from '../../definitions'
import { HTTP_PAYLOAD_TOO_LARGE, retryAfter } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'

export class PayloadTooLargeProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: PayloadTooLargeHeaders = {},
  ) {
    super(
      details,
      HTTP_PAYLOAD_TOO_LARGE,
      headers['Retry-After'] ?
        { ...headers, 'Retry-After': retryAfter(headers['Retry-After']) } :
        headers,
    )
    Object.setPrototypeOf(this, PayloadTooLargeProblem.prototype)
  }
}
