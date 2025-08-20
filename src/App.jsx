import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

// App 전체를 감싸는 컨테이너입니다.
// 기존 .App 클래스의 스타일을 여기에 적용합니다.
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f4f7f9;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

function App() {
  // 이제 App.scss 파일을 import할 필요가 없습니다.
  return (
    // <div className="App"> 대신 <AppContainer>를 사용합니다.
    <AppContainer>
      <Header />
      <Content />
    </AppContainer>
  );
}

export default App;
