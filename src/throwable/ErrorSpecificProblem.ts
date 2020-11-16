import { HttpHeaders } from '../definitions/HttpHeaders'
import { ErrorSpecificProblemDetails } from '../definitions/ErrorSpecificProblemDetails'
import { Problem } from './Problem'

export class ErrorSpecificProblem extends Problem {
  constructor (
    details: ErrorSpecificProblemDetails,
    status: number,
    headers: HttpHeaders = {},
  ) {
    super(
      {
        ...details.type ? { ...details, type: details.type } : { ...details, type: 'about:blank' },
        status,
      },
      { ...headers, 'Content-Type': 'application/problem+json' },
    )
    Object.setPrototypeOf(this, ErrorSpecificProblem.prototype)
  }
}
