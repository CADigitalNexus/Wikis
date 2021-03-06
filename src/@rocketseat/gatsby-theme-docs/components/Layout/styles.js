import styled from '@emotion/styled';
import React from 'react';

import LeafLogo from './../extras/leaf-logo';
import GithubLogo from './../extras/github-logo';
import Footer from './../Footer/Footer'

// custom (botmation docs specific):
const LeafLogoContainer = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0px;
`;
const ContainerInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;
  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;
const ExtraLogosContainer = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
`;

// shadowing:
export const Container = (props) => {
  return (
    <>
      <ContainerInner>
        <ExtraLogosContainer>
          <a href="https://github.com/CADigitalNexus/Wikis" className="github-corner" aria-label="View source on GitHub" target="_blank" rel="noreferrer">
            <GithubLogo />
          </a>
        </ExtraLogosContainer>

        { props.children }

        <LeafLogoContainer>
          <LeafLogo />
        </LeafLogoContainer>
       
      </ContainerInner>
      <Footer style={{marginTop: '-70px'}} />
    </>
  )
}

export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(75% - 64px);
  padding-right: 64px;
  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
    order: 3;
  }
`;