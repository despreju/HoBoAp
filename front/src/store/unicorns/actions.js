import axios from 'axios';

import * as types from './types';

const ENDPOINT = '815c82a4f3ea4601ad5f2c3e45b7aef2';
const URL = `https://crudcrud.com/api/${ENDPOINT}/unicorns`;

export default {
  // GET - get all unicorns
  loadUnicorns({
    commit,
  }) {
    axios
      .get(URL)
      .then((response) => {
        commit(types.LOAD_UNICORNS, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // POST - create 1 unicorn
  createUnicorn({
    commit,
  }, unicorn) {
    axios
      .post(URL, unicorn)
      .then((response) => {
        commit(types.CREATE_UNICORN, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // DELETE - delete unicorn with id
  deleteUnicorn({
    commit,
  }, id) {
    axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          commit(types.DELETE_UNICORN, id);
        } else {
          console.log(`error while deleting unicorn ${id}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // UPDATE - update unicorn with id
  updateUnicorn({
    commit,
  }, obj) {
    axios
      .put(`${URL}/${obj._id}`, obj.unicorn)
      .then((response) => {
        if (response.status === 200) {
          commit(types.UPDATE_UNICORN, {
            id: obj._id,
            unicorn: obj.unicorn,
          });
        } else {
          console.log(`error while updating unicorn ${obj._id}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
