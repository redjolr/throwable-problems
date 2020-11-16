import { HttpHeaders } from '../HttpHeaders'

export interface RangeNotSatisfiableHeaders extends HttpHeaders {
  'Content-Range': string
}
