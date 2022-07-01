import { GlobalStyle, NavBar } from "components";
import {theme} from 'utils';
import { ThemeProvider } from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { BROWSE, HOME, LOGIN, NEWS, MEDIAINFO } from "navigation/CONSTANTS";
import { Home, MediaInfoPage } from "pages";
import { NotFound } from "navigation/404";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path={HOME} element={ <NavBar /> }>
              <Route index element={ <Home /> } />
              <Route path={BROWSE} element={<h1>Browse</h1>} />
              <Route path={LOGIN} element={<h1>Login</h1>} />
              <Route path={NEWS} element={<h1>News</h1>} />
              <Route path={MEDIAINFO} element={<MediaInfoPage />} />
            </Route>
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
