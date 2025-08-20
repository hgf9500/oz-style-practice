import React from 'react';
import styled, { keyframes } from 'styled-components';

// 버튼 호버 시 약간 떠오르는 애니메이션 효과입니다.
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Content를 감싸는 컨테이너입니다.
// 기존 .content 클래스의 스타일을 적용합니다.
const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
`;

// 메인 이미지 스타일입니다.
// 기존 .main-image 클래스의 스타일을 적용합니다.
const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

// 설명 텍스트 스타일입니다.
const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;

// 버튼들을 감싸는 컨테이너입니다.
// 기존 .buttons 클래스의 스타일을 적용합니다.
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

// 버튼 스타일입니다. props를 받아 배경색을 동적으로 변경합니다.
// 기존 .button 클래스의 스타일을 적용합니다.
const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => (props.primary ? '#0056b3' : '#5a6268')};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    animation: ${floatAnimation} 0.7s ease-in-out infinite;
  }
`;

function Content() {
  return (
    <ContentContainer>
      <MainImage 
        src="https://placehold.co/600x400/61dafb/282c34?text=Welcome+to+OZ" 
        alt="Welcome to OZ" 
      />
      <Description>
        이곳은 Styled-Components를 사용하여 새롭게 태어난 OZ 페이지입니다.
        SCSS 파일 없이 각 컴포넌트가 자신의 스타일을 온전히 책임집니다.
      </Description>
      <ButtonWrapper>
        <StyledButton primary>시작하기</StyledButton>
        <StyledButton>더 알아보기</StyledButton>
      </ButtonWrapper>
    </ContentContainer>
  );
}

export default Content;