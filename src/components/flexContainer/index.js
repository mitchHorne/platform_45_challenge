import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
