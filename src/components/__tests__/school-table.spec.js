import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SchoolTable from '../school-table.cmp.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Cmp Table Data', () => {
  let wrapper;
  let storeOptions;
  let store;
  beforeEach(() => {
    storeOptions = {
      state: {},
      actions: {
        getAllColleges: jest.fn(() => {}),
      },
      getters: {},
    };
    store = new Vuex.Store(storeOptions);

    wrapper = shallowMount(SchoolTable, {
      localVue,
      store,
    });
  });

  test('should display a table', () => {
    expect(wrapper.html()).toContain('<th scope="col">School Name</th>');
  });

  test('colleged data was fetched', () => {
    expect.assertions(1);
    store.dispatch = jest.fn(() => {});
    shallowMount(SchoolTable, {
      localVue,
      store,
    });
    expect(store.dispatch).toHaveBeenCalledWith('getAllColleges');
  });
});
