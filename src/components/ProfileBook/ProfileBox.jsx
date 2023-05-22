import React from "react";
import styled from "styled-components";

const ProfileBox = () => {
  return (
    <Container>
      <ProfileRight>
        <ProfileInfo>
          <ImgWrapper>
            <LevelImg src="/images/LevelTwo.png" alt="실력을 나타내는 이미지" />
          </ImgWrapper>
          <Name>하지현</Name>
        </ProfileInfo>
      </ProfileRight>
      <ProfileLeft>
        <Filter>
          <FirstInfoKeyValue>여</FirstInfoKeyValue>
          <InfoKeyName>성별</InfoKeyName>
        </Filter>
        <Filter>
          <SecondInfoKeyValue>숙련</SecondInfoKeyValue>
          <InfoKeyNameSecond>실력</InfoKeyNameSecond>
        </Filter>
      </ProfileLeft>
    </Container>
  );
};

export default ProfileBox;

const Container = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 8px;
  background-color: white;
  width: 100%;
  height: 200px;

  @media screen and (max-width: 550px) {
    height: 150px;
  }
`;

const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 0.5;
  @media screen and (max-width: 550px) {
    flex: 0.6;
    align-items: flex-start;
    padding: 9px 0 0 30px;
  }

  @media screen and (max-width: 440px) {
    padding: 9px 30px 0 16px;
  }
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  gap: 20px;
  @media screen and (max-width: 550px) {
    gap: 6px;
    padding: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 120px;
  flex: 1;
`;

const LevelImg = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 50%;
`;

const Name = styled.div`
  width: 100%;
  flex: 0.5;
  font-size: ${props => props.theme.xl.fontSize};
  line-height: ${props => props.theme.xl.lineHeight};
  font-weight: 900;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: ${props => props.theme.base.fontSize};
    line-height: ${props => props.theme.base.lineHeight};
  }
`;

const ProfileLeft = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 550px) {
    padding: 12px 0;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FirstInfoKeyValue = styled.div`
  font-size: ${props => props.theme["2xl"].fontSize};
  line-height: ${props => props.theme["2xl"].lineHeight};
`;

const InfoKeyName = styled.div`
  font-size: ${props => props.theme.xs.fontSize};
  line-height: ${props => props.theme.xs.lineHeight};
  padding-left: 4px;
  padding-bottom: 20px;
  @media screen and (max-width: 550px) {
    padding-bottom: 8px;
  }
`;
const InfoKeyNameSecond = styled.div`
  font-size: ${props => props.theme.xs.fontSize};
  line-height: ${props => props.theme.xs.lineHeight};
  padding-left: 4px;
`;
const SecondInfoKeyValue = styled.div`
  line-height: normal;
  padding-top: 20px;
  font-size: ${props => props.theme["2xl"].fontSize};
  line-height: ${props => props.theme["2xl"].lineHeight};
  border-top: 1px solid ${props => props.theme.lightGray};

  @media screen and (max-width: 550px) {
    padding-top: 10px;
  }
`;