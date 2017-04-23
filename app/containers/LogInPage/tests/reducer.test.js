
import { fromJS } from 'immutable';
import logInPageReducer from '../reducer';

describe('logInPageReducer', () => {
  it('returns the initial state', () => {
    expect(logInPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
