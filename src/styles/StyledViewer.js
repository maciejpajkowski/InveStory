import styled from 'styled-components';

const StyledViewer = styled.div`
  background-color: #fafafa;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  padding: 40px;
  overflow-y: scroll;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: none;
    padding: 1rem;

    &:last-child {
      padding-bottom: 2rem;
    }
  }
`;

export default StyledViewer;