import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_PAYMENT_REQUIRED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class PaymentRequiredProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_PAYMENT_REQUIRED, headers)
    Object.setPrototypeOf(this, PaymentRequiredProblem.prototype)
  }
}
