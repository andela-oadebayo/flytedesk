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

export default helpers;
