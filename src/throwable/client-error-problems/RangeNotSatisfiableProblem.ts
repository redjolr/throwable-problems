import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_RANGE_NOT_SATISFIABLE } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { RangeNotSatisfiableHeaders } from '../../definitions/problem-headers/RangeNotSatisfiableHeaders'

export class RangeNotSatisfiableProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: RangeNotSatisfiableHeaders,
  ) {
    super(details, HTTP_RANGE_NOT_SATISFIABLE, headers)
    Object.setPrototypeOf(this, RangeNotSatisfiableProblem.prototype)
  }
}
