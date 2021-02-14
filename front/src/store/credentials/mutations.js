import * as types from './types';

export default {
  [types.SETPROFILE](state, profile) {
    state.user.mail = profile.mail;
    state.user.name = profile.name;
    state.user.picture = profile.maipicturel;
    state.user.level = profile.level;
  },
};
