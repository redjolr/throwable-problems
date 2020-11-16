import { HttpHeaders } from '../HttpHeaders'

export interface MethodNotAllowedProblemHeaders extends HttpHeaders {
  Allow: string
}
