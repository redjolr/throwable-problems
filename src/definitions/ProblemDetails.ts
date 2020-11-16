

export interface ProblemDetails {

  /**
   * A URI that points to a resource that identifies the type of the problem.
   */
  type: string

  /**
   *  A short, human-readable summary of the problem type.
   */
  title: string

  /**
   * The HTTP status code
   */
  status: number

  /**
   * A human-readable explanation specific to this occurrence of the problem.
   */
  detail?: string

  /**
   * A URI reference that identifies the specific occurrence of the problem.
   * It may or may not yield further information if dereferenced.
   */
  instance?: string
}

