import React from 'react';
import { HOME, NEWS, LOGIN, BROWSE } from "navigation/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { StyledLink, StyledButton } from 'components';

const useNavBar = function(){

    const theme = useTheme();
    const navigate = useNavigate();
    const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);
    const nav = React.useRef();

    React.useLayoutEffect(() => {
        document.addEventListener('scroll', () => {
          if(window.scrollY > 50)
            nav.current.style.background = 'black';
          else
          nav.current.style.background = 'transparent';
        });
      }, []);

    function handleNavLinkClick (event) {
        resetLinkStyles()
        event.target.style.color = theme.clrAccent;
        if (isSideNavOpen) toggleSideNav();
    }

    function navigateHome() {
        navigate(HOME);
        resetLinkStyles()
    }

    function resetLinkStyles() {
        document.querySelector('nav').querySelectorAll('ul')
        .forEach(ul => ul.querySelectorAll('a')
        .forEach(a => a.style.color = theme.textDark));
    }

    function toggleSideNav() {
        document.querySelector(".mobile-nav").style.right = isSideNavOpen ? "-100%" : "0";
        setIsSideNavOpen(!isSideNavOpen);
    }

    function handleBurgerClick() {toggleSideNav()};

    function handleLoginButtonClick() {
        resetLinkStyles();
        navigate("/asdsda");
        if (isSideNavOpen) toggleSideNav();
    }

    function getLinks() {
        return (
            <React.Fragment>
                <StyledLink onClick={handleNavLinkClick} to={BROWSE}>Browse</StyledLink>
                <StyledLink onClick={handleNavLinkClick} to={NEWS}>News</StyledLink>
                <StyledLink onClick={handleNavLinkClick} to={NEWS}>About/Disclaimer</StyledLink>
                <StyledButton btnColor={theme.colors.clrAccent} onClick={handleLoginButtonClick}>Sign Up</StyledButton>
            </React.Fragment>
        )
    }

    return { navigateHome, handleBurgerClick, getLinks, nav };
};

export default useNavBar;