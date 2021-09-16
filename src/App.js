import './App.css';
import styled from "styled-components";

import Routes from './Routes/Routes'

import 'antd/dist/antd.css';

function App() {
  const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
`;
  return (
  <App>
    <Routes />
  </App>

  );
}

export default App;
