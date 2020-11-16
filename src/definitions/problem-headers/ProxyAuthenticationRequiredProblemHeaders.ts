import { HttpHeaders } from '../HttpHeaders'

export interface ProxyAuthenticationRequiredProblemHeaders extends HttpHeaders {
  'Proxy-Authenticate': string
}
