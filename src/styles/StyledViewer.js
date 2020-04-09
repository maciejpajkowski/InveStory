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
`;

export default StyledViewer;