import { HttpHeaders } from '../HttpHeaders'

export interface UpgradeRequiredHeaders extends HttpHeaders {
  Upgrade: string
}
