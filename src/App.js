import './App.css';
import SlideImage from './components/slideImage';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(70deg, #006ded 0%, #1bace2 34.48%, #00e2ed 100%)
`;

function App() {
  return (
    <Wrapper className="App">
      <SlideImage />
    </Wrapper>
  );
}


export default App;
