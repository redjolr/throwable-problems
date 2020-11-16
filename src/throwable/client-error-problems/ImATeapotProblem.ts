
import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_IM_A_TEAPOT } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class ImATeapotProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_IM_A_TEAPOT, headers)
    Object.setPrototypeOf(this, ImATeapotProblem.prototype)
  }
}
