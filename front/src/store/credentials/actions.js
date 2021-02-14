import * as types from './types';

export default {

  login({
    commit,
  }) {
    commit(types.SETPROFILE, {mail: 'test@test.com', name: 'test', picture: '', level: 'user'});  
    localStorage.setItem('profile', {mail: 'test@test.com', name: 'test', picture: '', level: 'user'});   
  },
  logout({
    commit,
  }) {
    commit(types.SETPROFILE, {mail: '', name: '', picture: '', level: ''});     
    localStorage.removeItem('profile');
  },
  initProfile({
    commit,
  }) {
    console.log('profile: ', localStorage.getItem('profile'));
    commit(types.SETPROFILE, localStorage.getItem('profile')); 
  },
};
