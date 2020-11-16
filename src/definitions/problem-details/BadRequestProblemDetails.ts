import { ErrorSpecificProblemDetails } from '../ErrorSpecificProblemDetails'
import { ValidationError } from '../ValidationError'

export interface BadRequestProblemDetails extends ErrorSpecificProblemDetails {
  validationErrors?: Array<ValidationError>
}
