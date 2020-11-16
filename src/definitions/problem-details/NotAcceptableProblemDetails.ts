import { ErrorSpecificProblemDetails } from '../ErrorSpecificProblemDetails'

export interface NotAcceptableProblemDetails
  extends ErrorSpecificProblemDetails {

  /**
   * Acceptable representations by the server. Example:
   * { "acceptable" : [ "application/json", "application/pdf" ] }
   */
  acceptable: Array<string>
}
