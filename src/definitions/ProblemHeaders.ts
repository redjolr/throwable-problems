export type ProblemHeaders = {
  [key: string]: string | number | undefined
  'Content-Type': 'application/problem+json' | 'application/problem+xml',
}
