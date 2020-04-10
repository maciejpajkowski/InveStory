import styled from 'styled-components';

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 8.5fr;
  height: 100vh;

  @media (max-width: 1366px) {
    grid-template-columns: 2fr 8fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 3fr 7fr;
  }

  @media (max-width: 480px) {
    grid-template-rows: 1fr 9fr;
    grid-template-columns: none;
  }
`;

export default StyledMainGrid