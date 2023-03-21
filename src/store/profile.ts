import { user } from '@/api/auth';
import { authStorage } from '@/api/authStorage';
import { ActionContext } from 'vuex';
import { AuthState } from '@/types/authState.d';
import { ProfileEntity } from '@/types/authRequests.d';
import { ProfileState } from '@/types/profileState.d';

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    user(state: ProfileState, payload: ProfileEntity) {
      state.user = payload;
    },
  },
  actions: {
    async getUser({ commit }: ActionContext<AuthState, object>) {
      const { success, error, profile } = await user(authStorage.token);
      if (success && profile) {
        commit('user', profile);
      } else {
        console.log('profile error', error);
      }
    },
  },
};
