export interface LoginRequestResult {
  success: boolean
  error?: string|null
  accessToken?: string
}

export interface ProfileEntity {
  id: string
  name: string
  email: string
}

export interface ProfileRequestResult {
  success: boolean
  error?: string|null
  profile?: ProfileEntity
}
