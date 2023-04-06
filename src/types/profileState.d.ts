import { ProfileEntity } from './api.d';

export interface NewProfileForm {
    username: string,
    avatar: string,
}

export interface GameProfile {
  id: string,
  username: string,
  avatar: string,
}

export interface ProfileState {
    user?: ProfileEntity,
    profiles: Array<any>,
    newProfile: NewProfileForm,
}
