import * as types from './types';

export default {
  [types.LOAD_UNICORNS](state, unicorns) {
    state.unicorns = unicorns;
  },
  [types.CREATE_UNICORN](state, unicorn) {
    state.unicorns.push(unicorn);
  },
  [types.DELETE_UNICORN](state, id) {
    state.unicorns = state.unicorns.filter((unicorn) => unicorn._id !== id);
  },
  [types.UPDATE_UNICORN](state, obj) {
    const oldUnicorn = state.unicorns.find((item) => {
      if (item._id === obj.id) return item;
      return null;
    });
    if (oldUnicorn) {
      oldUnicorn.age = obj.unicorn.age;
      oldUnicorn.name = obj.unicorn.name;
      oldUnicorn.colour = obj.unicorn.colour;
    }
  },
};
