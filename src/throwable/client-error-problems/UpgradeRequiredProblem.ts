import { ErrorSpecificProblemDetails } from '../../definitions'
import { HTTP_UPGRADE_REQUIRED } from 'throwable-http-exceptions'
import { ErrorSpecificProblem } from '../ErrorSpecificProblem'
import { UpgradeRequiredHeaders } from '../../definitions/problem-headers/UpgradeRequiredHeaders'

export class UpgradeRequiredProblem extends ErrorSpecificProblem {
  constructor (
    details: ErrorSpecificProblemDetails,
    headers: UpgradeRequiredHeaders,
  ) {
    super(details, HTTP_UPGRADE_REQUIRED, headers)
    Object.setPrototypeOf(this, UpgradeRequiredProblem.prototype)
  }
}
