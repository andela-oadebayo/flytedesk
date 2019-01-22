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
  compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  },
};

const state = {
  colleges: [],
  status: false,
  selected: [],
  modalType: '',
  schoolToEdit: {},
};

const getters = {
  getAllColleges: s => s.colleges.sort(helpers.compare),
  getApiStatus: s => s.status,
  getSelectedSchools: s => s.selected,
  getModalType: s => s.modalType,
  getSchoolToEdit: s => s.schoolToEdit,
};

const mutations = {
  setAllColleges: (s, payload) => {
    s.colleges = payload;
  },

  addToSchoolList: (s, payload) => {
    s.colleges.unshift(payload);
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

  addSchoolToEdit: (s, payload) => {
    s.schoolToEdit = payload;
  },

  editSchool: (s, payload) => {
    s.colleges.forEach((value) => {
      if (value.name === s.schoolToEdit.name) {
        value = payload;
      }
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

  filterSchoolList: ({ commit }, payload) => {
    commit('filterSchoolList', payload);
  },

  removeCollegeFromList: ({ commit }, payload) => {
    commit('removeCollegeFromList', payload);
  },

  changeModalType: ({ commit }, payload) => {
    commit('changeModalType', payload);
  },

  addSchoolToEdit: ({ commit }, payload) => {
    commit('addSchoolToEdit', payload);
  },

  editSchool: ({ commit }, payload) => {
    commit('editSchool', payload);
  },

  createNewSchool: ({ commit }, payload) => {
    commit('addToSchoolList', payload);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
