import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const token = true;

  return (
    <HeaderFlex>
      <Link to="/">LOGO</Link>
      <CategoryFlex>
        <CategoryName>
          <Link to="/">예약하기</Link>
        </CategoryName>
        <CategoryName>
          <Link to="Matching">매칭하기</Link>
        </CategoryName>
      </CategoryFlex>
      <CategoryFlex>
        <LoginButton>{!token ? "로그인 및 회원가입" : "로그아웃"}</LoginButton>
        {token && (
          <ProfileButton>
            <MenuIcon src="images/Nav/menu_FILL0_wght400_GRAD0_opsz48.png"></MenuIcon>
            <ProfileImg />
          </ProfileButton>
        )}
      </CategoryFlex>
    </HeaderFlex>
  );
};

export default Header;

const HeaderFlex = styled.div`
  padding: 0 40px;
  width: 1280px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const CategoryFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryName = styled.span`
  font-size: 16px;
  padding: 10px;
  position: relative;

  &:hover:after {
    content: "";
    width: 64px;
    height: 2px;
    background-color: black;
    position: absolute;
    left: 10px;
    bottom: 0;
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;

const ProfileButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 50px;
  box-sizing: border-box;
  margin-left: 20px;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border-radius: 50px;
  }
`;

const MenuIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 5px;
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  background-color: burlywood;
  border-radius: 100%;
`;