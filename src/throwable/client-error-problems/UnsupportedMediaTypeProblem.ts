import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_UNSUPPORTED_MEDIA_TYPE } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { HttpHeaders } from '../../definitions/HttpHeaders'

export class UnsupportedMediaTypeProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers?: HttpHeaders,
  ) {
    super(details, HTTP_UNSUPPORTED_MEDIA_TYPE, headers)
    Object.setPrototypeOf(this, UnsupportedMediaTypeProblem.prototype)
  }
}
