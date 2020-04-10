import styled from 'styled-components';

const StyledInstructions = styled.div`
  color: darkgreen;
  background-color: #fff;
  height: 15rem;
  box-shadow: 0px 0px 4px 1px #a2d9a2;
  padding: 30px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  
  h2 {
    margin: 10px 0;
  }

  @media (max-width: 992px) {
    height: 16rem;
  }

  @media (max-width: 640px) {
    height: 22rem;
  }
`;

export default StyledInstructions;