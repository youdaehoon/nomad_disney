import React from "react";
import styled from "styled-components";

import ima from "./assets/logo192.png";

import { Outlet, useMatch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
const Container = styled.div`
  height: 100vh;
  display: flex;
`;
const Sidebar = styled.aside`
  border-right: 1px solid rgb(219, 219, 219);
  padding: 8px 12px 20px;
  height: 100%;
  width: 335px;
  & > span,
  & > ul {
    display: block;
  }

  transition: width 1s ease;

  @media (max-width: 1264px) {
    width: 72px;
    span {
      display: none;
    }
  }
`;
const Logo = styled.h1`
  font-size: 29px;
  letter-spacing: -0.3rem;
  padding: 25px 12px 16px;
  cursor: pointer;
  overflow: hidden;
  transition: opacity 1s ease;

  @media (max-width: 1264px) {
    opacity: 0;
  }
`;
const LogoM = styled.div`
  width: 29px;
  position: absolute;
  top: 25px;
  left: calc(50% - 14.5px);
  opacity: 0;
  transform: scale(0);
  transition: transform opacity 1s ease;
  z-index: 2;

  @media (max-width: 1264px) {
    opacity: 1;
    transform: scale(1);
  }

  & > img {
    width: 29px;
    height: 29px;
    cursor: pointer;
  }
`;
const Menus = styled.ul``;
const Menu = styled.li<{ isSelected: boolean }>`
  width: 100%;
  height: 48px;
  padding: 12px;

  display: flex;
  align-items: center;

  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  & span {
    font-size: 16px;
    font-weight: ${(props) => (props.isSelected ? 800 : 400)};
  }
  & img {
    width: 22px;
    height: 22px;
    margin-right: 16px;

    transition: transform 0.1s ease;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

const OutletContainer = styled.section`
  height: inherit;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;
function App() {
  const match = useMatch("/");

  return (
    <>
      <Container>
        <Sidebar>
          <Logo>𝓬𝓱𝓪𝓻𝓪𝓬𝓽𝓮𝓻𝓰𝓻𝓪𝓶</Logo>
          <LogoM>
            <img alt="icon" src={ima}></img>
          </LogoM>

          <Menus>
            <Menu isSelected={match !== null}>
              <img alt="icon" src={ima}></img>
              <span>Home</span>
            </Menu>
            <Menu isSelected={false}>
              <img alt="icon"></img> <span>Search</span>
            </Menu>
          </Menus>
        </Sidebar>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>

      <GlobalStyle />
    </>
  );
}

export default App;
const GlobalStyle = createGlobalStyle`


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{box-sizing:border-box}
body{
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;

}
a{
  text-decoration: none;
  
}

`;
