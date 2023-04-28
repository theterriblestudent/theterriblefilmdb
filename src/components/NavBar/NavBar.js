import React, { Fragment } from 'react';
import {StyledNav, StyledLogo, StyledNavLinks, SearchForm} from 'components';
import {StyledMobileNav, StyledBars} from 'components'
import { Outlet } from 'react-router-dom';
import { Logo } from 'assets';
import composeHooks from 'react-hooks-compose'
import useNavBar from './useNavBar';

function NavBar({ navigateHome, handleBurgerClick, getLinks, nav}) {
    return (
        <Fragment>
            <StyledNav ref={nav}>
                <StyledLogo src={Logo} onClick={navigateHome}/>
                <StyledNavLinks>{getLinks()}</StyledNavLinks>
                <StyledMobileNav>
                    <SearchForm mobile/>
                    {getLinks()}
                </StyledMobileNav>
                <SearchForm />
                <StyledBars onClick={handleBurgerClick}/>
            </StyledNav>
            <Outlet />
        </Fragment>
    );
};

export default React.memo(composeHooks({useNavBar})(NavBar));