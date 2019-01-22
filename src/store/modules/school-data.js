/* eslint-disable no-param-reassign */
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
  modalType: '',
};

const getters = {
  getAllColleges: s => s.colleges,
  getApiStatus: s => s.status,
  getSelectedSchools: s => s.selected,
  getModalType: s => s.modalType,
};

const mutations = {
  setAllColleges: (s, payload) => {
    s.colleges = payload;
  },

  addToSchoolList: (s, payload) => {
    s.colleges.push(payload);
  },

  setApiStatus: (s, payload) => {
    s.status = payload;
  },

  addSchoolToSelected: (s, payload) => {
    helpers.selectedSplice(s, payload);
  },

  addAllSchoolToSelected: (s) => {
    s.colleges.forEach((value) => {
      helpers.selectedSplice(s, value.name);
    });
  },

  filterSchoolList: (s, payload) => {
    const response = s.colleges.filter((college) => {
      const string = Object.values(college)
        .join('')
        .split(' ')
        .join('')
        .toLowerCase();
      return string.includes(payload.toLowerCase());
    });
    s.colleges = response;
  },

  removeCollegeFromList: (s, payload) => {
    s.colleges.forEach((college, index) => {
      if (payload.includes(college.name)) {
        s.colleges.splice(index, 1);
      }
    });

    s.selected = [];
  },

  changeModalType: (s, payload) => {
    s.modalType = payload;
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

  filterSchoolList: ({ commit }, payload) => {
    commit('filterSchoolList', payload);
  },

  removeCollegeFromList: ({ commit }, payload) => {
    commit('removeCollegeFromList', payload);
  },

  changeModalType: ({ commit }, payload) => {
    commit('changeModalType', payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
