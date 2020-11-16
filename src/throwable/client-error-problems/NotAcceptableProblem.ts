

import { NotAcceptableProblemDetails, HttpHeaders } from '../../definitions'
import { HTTP_NOT_ACCEPTABLE } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'

export class NotAcceptableProblem extends ErrorSpecificProblem {
  constructor (
    details: NotAcceptableProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_NOT_ACCEPTABLE, headers)
    Object.setPrototypeOf(this, NotAcceptableProblem.prototype)
  }
}
