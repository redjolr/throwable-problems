import { HttpException } from 'throwable-http-exceptions'
import { ProblemHeaders } from '../definitions/ProblemHeaders'
import { ProblemDetails } from '../definitions'

export class Problem extends HttpException {
  constructor (
    details: ProblemDetails,
    headers: ProblemHeaders,
  ) {
    super(
      details.status,
      {
        body: details,
        headers,
      },
    )
    Object.setPrototypeOf(this, Problem.prototype)
  }
}
