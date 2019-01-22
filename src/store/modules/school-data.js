import { getSchoolList } from '../../services/colleges';

const helpers = {
  selectedSplice(state, payload) {
    if (state.selected.includes(payload)) {
      state.selected.splice(state.selected.indexOf(payload), 1);
    } else {
      state.selected.push(payload);
    }
  },
};


const state = {
  colleges: [],
  status: false,
  selected: [],
};

const getters = {
  getAllColleges: s => s.colleges,
  getApiStatus: s => s.status,
  getSelectedSchools: s => s.selected,
};

const mutations = {
  setAllColleges: (s, payload) => {
    // eslint-disable-next-line no-param-reassign
    s.colleges = payload;
  },

  addToSchoolList: (s, payload) => {
    s.colleges.push(payload);
  },

  setApiStatus: (s, payload) => {
    // eslint-disable-next-line no-param-reassign
    s.status = payload;
  },

  addSchoolToSelected: (s, payload) => {
    helpers.selectedSplice(s, payload);
  },

  addAllSchoolToSelected: (s) => {
    // eslint-disable-next-line no-param-reassign
    s.colleges.forEach((value) => {
      helpers.selectedSplice(s, value.zip);
    });
  },
};

const actions = {
  getAllColleges: ({ commit }) => {
    commit('setAllColleges', getSchoolList());
    commit('setApiStatus', true);
  },

  addSchoolToSelected: ({ commit }, payload) => {
    commit('addSchoolToSelected', payload);
  },

  addAllSchoolToSelected: ({ commit }) => {
    commit('addAllSchoolToSelected');
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
