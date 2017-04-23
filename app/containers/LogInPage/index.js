/*
 *
 * LogInPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLogInPage from './selectors';
import messages from './messages';

export class LogInPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="LogInPage"
          meta={[
            { name: 'description', content: 'Description of LogInPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

LogInPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LogInPage: makeSelectLogInPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
