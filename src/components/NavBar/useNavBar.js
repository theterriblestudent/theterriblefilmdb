import React from 'react';
import { HOME, NEWS, LOGIN, BROWSE } from "navigation/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { StyledLink, StyledButton } from 'components';
/*
 * Handles all the nav bar logic
 * @returns navigateHome(): is run when the websites brand is
 *   clicked. It redirects to the home page.
 * @returns handleBurgerClick(): opens and closes the mobile
 *   nav menu when the burger button is clicked.
 * @returns getLinks(): generates and returns the nav links to be displayed.
 * @returns nav: the DOM ref of the nav bar.
 */
const useNavBar = function(){

    const theme = useTheme();
    const navigate = useNavigate();
    const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);

    /* This ref is used as a selector when dimming the nav bar's background.It's
     * passed down to the nav bar as a prop (composeHooks) and references the
     * nav bar itself.
     */
    const nav = React.useRef();

    // Dims the nav bar when you scroll down
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
        event.target.style.color = theme.colors.accent;
        if (isSideNavOpen) toggleSideNav();
    }

    function navigateHome() {
        navigate(HOME);
        resetLinkStyles()
    }

    function resetLinkStyles() {
        document.querySelector('nav').querySelectorAll('ul')
        .forEach(ul => ul.querySelectorAll('a')
        .forEach(a => a.style.color = theme.colors.dark_text));
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

    /* Generates the links that are displayed in the nav bar
     * @returns: the generated links.
     */
    function getLinks() {
        return (
            <React.Fragment>
                <StyledLink onClick={handleNavLinkClick} to={BROWSE}>Browse</StyledLink>
                <StyledLink onClick={handleNavLinkClick} to={NEWS}>News</StyledLink>
                <StyledLink onClick={handleNavLinkClick} to={NEWS}>About/Disclaimer</StyledLink>
                <StyledButton btnColor={theme.colors.accent} onClick={handleLoginButtonClick}>Sign Up</StyledButton>
            </React.Fragment>
        )
    }

    return { navigateHome, handleBurgerClick, getLinks, nav };
};
export default useNavBar;
