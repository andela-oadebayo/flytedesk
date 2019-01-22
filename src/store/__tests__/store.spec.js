import SchoolStore from '../modules/school-data';
import { getSchoolList } from '../../services/colleges';

jest.mock('../../services/colleges.js');

describe('Store Unit Test', () => {
  const state = {
    colleges: [
      {
        name: 'University of Notre Dame',
        city: 'Notre Dame',
        state: 'IN',
        zip: 46556,
      },
      {
        name: 'University of Miami',
        city: 'Coral Gables',
        state: 'FL',
        zip: 33124,
      },
      {
        name: 'University of Mississippi',
        city: 'Oxford',
        state: 'MS',
        zip: 38677,
      },
    ],
    status: false,
    selected: [
      '09871', '12345',
    ],
  };

  const newCollege = {
    name: 'Baylor University',
    city: 'Waco',
    state: 'TX',
    zip: 76798,
  };

  describe('getters', () => {
    test('should retun colleges from state', () => {
      const response = SchoolStore.getters.getAllColleges(state);
      expect(response).toEqual(state.colleges);
    });

    test('should retun api status from state', () => {
      const response = SchoolStore.getters.getApiStatus(state);
      expect(response).toEqual(false);
    });


    test('should retun currently selected schools from state', () => {
      const response = SchoolStore.getters.getSelectedSchools(state);
      expect(response).toEqual(state.selected);
    });
  });

  describe('mutations', () => {
    test('should mutate colleges in state', () => {
      SchoolStore.mutations.addToSchoolList(state, newCollege);
      expect(state.colleges).toContain(newCollege);
    });

    test('should set the zip code of currently selected colleges', () => {
      SchoolStore.mutations.addSchoolToSelected(state, newCollege.name);
      expect(state.selected).toContain(newCollege.name);
    });

    test('should add all the zip code of all colleges', () => {
      SchoolStore.mutations.addAllSchoolToSelected(state);
      expect(state.selected.length).toEqual(5);
    });
  });

  describe('actions', () => {
    test('should get all colleges', () => {
      expect.assertions(2);
      state.colleges = [];

      getSchoolList.mockImplementationOnce(() => {});
      const context = {
        commit: jest.fn(),
      };
      SchoolStore.actions.getAllColleges(context, {});
      expect(context.commit).toHaveBeenCalledWith('setAllColleges', getSchoolList());
      expect(context.commit).toHaveBeenCalledWith('setApiStatus', true);
    });
  });
});
