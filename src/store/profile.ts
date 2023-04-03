import { user } from '@/api/auth';
import { ActionContext } from 'vuex';
import { AuthState } from '@/types/authState.d';
import { ProfileEntity } from '@/types/authRequests.d';
import { ProfileState } from '@/types/profileState.d';
import { getProfiles } from '@/api/profile';

export default {
  namespaced: true,
  state: {
    user: null,
    profiles: []
  },
  mutations: {
    user(state: ProfileState, payload: ProfileEntity) {
      state.user = payload;
    },
    profiles(state: ProfileState, payload: Array<any>) {
      state.profiles = payload;
    }
  },
  actions: {
    async getUser({ commit }: ActionContext<AuthState, object>) {
      const { success, error, profile } = await user();
      if (success && profile) {
        commit('user', profile);
      } else {
        console.log('profile error', error);
      }
    },
    async getProfiles({ commit }: ActionContext<AuthState, object>) {
      const { success, error, profiles } = await getProfiles();
      if (success && profiles) {
        commit('profiles', profiles)
      } else {
        console.log('profiles load error', error)
      }
    },
  },
};
