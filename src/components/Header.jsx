import React from 'react';
import styled from 'styled-components';

// Header를 감싸는 컨테이너입니다.
// 기존 .header 클래스의 스타일을 여기에 적용합니다.
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: white;
  border-bottom: 2px solid #61dafb;
`;

// 로고 스타일입니다.
// 기존 .logo 클래스의 스타일을 적용합니다.
const Logo = styled.h1`
  font-size: 1.8rem;
  font-family: 'Georgia', serif;
  color: #61dafb;
  margin: 0;
  cursor: pointer;
`;

// 네비게이션 링크들을 감싸는 컨테이너입니다.
// 기존 .nav-links 클래스의 스타일을 적용합니다.
const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
`;

function Header() {
  return (
    // 기존의 <header className="header"> 대신 스타일 컴포넌트를 사용합니다.
    <HeaderContainer>
      {/* <h1 className="logo"> 대신 <Logo> 컴포넌트를 사용합니다. */}
      <Logo>OZ</Logo>
      {/* <nav className="nav-links"> 대신 <NavLinks> 컴포넌트를 사용합니다. */}
      <NavLinks>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;