import { ProblemDetails } from './ProblemDetails'

export type ErrorSpecificProblemDetails = Omit<ProblemDetails, 'status' | 'type'> & { type?: string}
