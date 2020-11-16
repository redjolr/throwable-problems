import { HttpHeaders } from '../HttpHeaders'

export interface UnauthorizedProblemHeaders extends HttpHeaders {
  'WWW-Authenticate': string
}
