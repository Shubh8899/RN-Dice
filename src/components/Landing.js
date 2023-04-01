import React from "react";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import { useHistory, withRouter } from "react-router-dom";
import { DivFlexCenter } from "../globals/styles";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
    width: inherit;
  `}
`;

const Wrapper = styled(DivFlexCenter)`
  height: 100vh;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled(DivFlexCenter)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.title};
    gap: 1rem;
  `}
`;

function Landing() {
    const history = useHistory();
    const routeChange = (input) => {
      let path = `/search/${input}`;
      history.push(path);
    };
  
    return (
      <Container id="Filters">
        <Wrapper>
          <Title>
            <GithubIcon /> Search Github Repository
          </Title>
          <SearchBar placeholder="Search..." onSubmit={routeChange} />
        </Wrapper>
      </Container>
    );
}

export default withRouter(Landing);