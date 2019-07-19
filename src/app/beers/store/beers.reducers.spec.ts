import { BeersState } from './beers.state-type';
import {FETCH_BEER_BY_ID_RESPONSE, FETCH_BEERS_RESPONSE} from './beers.actions';
import { GenericAction } from '../../models';
import { beersReducer } from './beers.reducer';


describe('beersReducer', () => {

  const initialState: BeersState = {
    data: [],
    id: null
  };

  describe('FETCH_BEERS_RESPONSE', () => {
    it('should set beers list as payload received', () => {
      const payload = [
        {id: 'test', name: 'testName'},
        {id: 'test1', name: 'testName1'},
        {id: 'test2', name: 'testName2'},
        {id: 'test3', name: 'testName3'}
      ];
      const action = new GenericAction(FETCH_BEERS_RESPONSE, payload);

      const result = beersReducer(initialState, action);

      expect(result.data).toEqual(payload);
    });
  });

  describe('FETCH_BEER_BY_ID_RESPONSE', () => {
    it('should set a beer as payload received', () => {
      const payload = [
        {id: 'test', name: 'testName'},
      ];
      const action = new GenericAction(FETCH_BEER_BY_ID_RESPONSE, payload);

      const result = beersReducer(initialState, action);

      expect(result.id).toEqual(payload);
    });
  });
});
