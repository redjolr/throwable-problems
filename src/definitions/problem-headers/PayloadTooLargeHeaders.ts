import { HttpHeaders } from '../HttpHeaders'

export interface PayloadTooLargeHeaders extends HttpHeaders {

  /**
   * Examples:
   * 1- Retry-After: Fri, 23 Oct 2015 15:28:02 GMT
   * 2- Retry-After: 120
   */
  'Retry-After'?: Date | number
}
