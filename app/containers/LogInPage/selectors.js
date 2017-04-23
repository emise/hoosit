import { createSelector } from 'reselect';

/**
 * Direct selector to the logInPage state domain
 */
const selectLogInPageDomain = () => (state) => state.get('logInPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LogInPage
 */

const makeSelectLogInPage = () => createSelector(
  selectLogInPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLogInPage;
export {
  selectLogInPageDomain,
};
