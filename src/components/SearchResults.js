import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { GoStar as StarIcon, GoRepoForked as ForkIcon } from "react-icons/go";

const Results = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div``;

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #1a1a1a;

  &:hover {
    text-decoration: underline;
  }
`;
const Repo = styled.div`
  padding: 7px 7px;
  border: 1px solid black;
  border-radius: 8px;
  margin-block: 15px;
`;

const Description = styled.div`
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Stars = styled.div`
  font-size: 0.7rem;
`;
const Language = styled.div``;
const Details = styled.div`
  font-size: 0.7rem;
  display: flex;
  gap: 1rem;
  line-height: 1.25rem;
`;
const UserImage = styled.img`
  width: 25px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 6px;
`;
const HeaderContainer = styled.div`
  display: flex;
`;

function SearchResults({ filteredResults, data }) {
  return (
    <Results>
      <List>
        {(filteredResults ? filteredResults?.items : data?.items || []).map(
          (r) => {
            const {
              owner,
              stargazers_count,
              language,
              full_name,
              id,
              description,
            } = r;
            return (
              <Repo key={id}>
                <HeaderContainer>
                  <UserImage src={owner.avatar_url}></UserImage>
                  <StyledLink
                    to={{
                      pathname: `/repository/${id}`,
                      state: { data: r },
                    }}
                  >
                    {full_name}
                  </StyledLink>
                </HeaderContainer>
                {description && <Description>{r.description}</Description>}
                <Details>
                  <Stars>
                    <StarIcon />
                    {stargazers_count || 0}
                  </Stars>
                  {language && <Language>{language || ""}</Language>}
                </Details>
              </Repo>
            );
          }
        )}
      </List>
    </Results>
  );
}

export default withRouter(SearchResults);
