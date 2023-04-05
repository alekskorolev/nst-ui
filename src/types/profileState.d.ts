import { ProfileEntity } from './api.d';

interface NewProfileForm {
    username: string,
    avatar: string,
}

export interface ProfileState {
    user?: ProfileEntity,
    profiles: Array<any>,
    newProfile: NewProfileForm,
}
