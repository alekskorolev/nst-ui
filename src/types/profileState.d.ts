import { ProfileEntity } from './authRequests.d';

export interface ProfileState {
    user?: ProfileEntity,
    profiles: Array<any>,
}
