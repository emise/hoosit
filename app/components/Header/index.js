import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import Img from './Img';
import LoginSection from './LoginSection';
import Logo from './logo.png';
import messages from './messages';

import styled from 'styled-components';


const HeaderBar = styled.div`
  background: #002F6C;
  padding: 10px 0;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
`

const RouterLink = styled(Link)`
  text-decoration: none;
`

const LogInButton = styled(Link)`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  display: block;
  color: white;
  padding: 5px 18px 8px;
  margin: auto;
  font-size: 14px;

  &:hover {
    color: #E57200;
    -webkit-transition: color 0.2s ease;
    -moz-transition: color 0.2s ease;
    -ms-transition: color 0.2s ease;
    -o-transition: color 0.2s ease;
    transition: color 0.2s ease;
  }
`

const SignUpButton = styled(Link)`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  display: block;
  color: white;
  margin: auto;
  font-size: 14px;
  padding: 5px 18px 8px;
  border: 1px solid white;

  &:hover {
    background: #E57200;
    border: 1px solid #E57200;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <HeaderBar>
        <HeaderWrapper>
          <RouterLink to="/">
            <Img src={Logo} alt="HooSitting - Logo" />
          </RouterLink>
          <LoginSection>
            <LogInButton to="/login">
              <FormattedMessage {...messages.login} />
            </LogInButton>
            <SignUpButton to="/signup">
              <FormattedMessage {...messages.signup} />
            </SignUpButton>
          </LoginSection>
        </HeaderWrapper>
      </HeaderBar>
    );
  }
}

export default Header;
