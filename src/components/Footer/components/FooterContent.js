import React from 'react';
import styled from 'styled-components';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

function FooterContent() {
  return (
    <ContentContainer>
      <NoticeWrap>
        <thead>
          <tr>
            <ContentsTitle>텀블벅</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Contents>공지사항</Contents>
          </tr>
          <tr>
            <Contents>채용</Contents>
          </tr>
          <tr>
            <Contents>제휴협력</Contents>
          </tr>
        </tbody>
      </NoticeWrap>
      <ServiceGuideWrap>
        <thead>
          <tr>
            <ContentsTitle>이용안내</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Contents>헬프센터</Contents>
          </tr>
          <tr>
            <ContentsHighlight>창작자 가이드</ContentsHighlight>
          </tr>
          <tr>
            <Contents>프로젝트 심사 기준</Contents>
          </tr>
          <tr>
            <Contents>수수료 정책</Contents>
          </tr>
        </tbody>
      </ServiceGuideWrap>
      <PolicyWrap>
        <thead>
          <tr>
            <ContentsTitle>정책</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Contents>이용약관</Contents>
          </tr>
          <tr>
            <ContentsRedHighlight>개인정보 처리방침</ContentsRedHighlight>
          </tr>
        </tbody>
      </PolicyWrap>
      <AppContentWrap>
        <thead>
          <tr>
            <ContentsTitle>App</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Contents />
          </tr>
          <tr>
            <AndroidButton>
              <FaGooglePlay />
              안드로이드
            </AndroidButton>
          </tr>
          <tr>
            <Contents />
          </tr>
          <tr>
            <IosButton>
              <FaApple />
              iOS
            </IosButton>
          </tr>
        </tbody>
      </AppContentWrap>
      <CustomerWrapContents>
        <thead>
          <tr>
            <ContentsTitle>고객지원</ContentsTitle>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Timetable>평일 10:00 ~ 18:00 (12:00 ~ 14:00 제외)</Timetable>
          </tr>
          <tr>
            <CustomerButton>스카이로켓에 문의</CustomerButton>
          </tr>
        </tbody>
      </CustomerWrapContents>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  width: 1080px;
  padding: 18px 18px 0 18px;
`;

const NoticeWrap = styled.table`
  width: 112px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const ServiceGuideWrap = styled.table`
  width: 170px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const PolicyWrap = styled.table`
  width: 170px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const AppContentWrap = styled.table`
  width: 170px;
  height: 100%;
  margin-right: 200px;
  border-spacing: 10px;
  border-collapse: separate;
`;

const CustomerWrapContents = styled.table`
  width: 250px;
  height: 100%;
  border-spacing: 10px;
  border-collapse: separate;
`;

const ContentsTitle = styled.th`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
`;

const Contents = styled.td`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #6d6d6d;
`;

const ContentsHighlight = styled.td`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: #f76453;
`;

const ContentsRedHighlight = styled.td`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: #939393;
`;

const Timetable = styled.td`
  font-size: 12px;
  color: #6d6d6d;
`;

const AndroidButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 36px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  background-color: #f0f0f0;
  color: #6d6d6d;
`;

const IosButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 36px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  background-color: #f0f0f0;
  color: #6d6d6d;
`;

const CustomerButton = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  width: 180px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #d0d0d0;
  font-size: 14px;
  background-color: #ffffff;
`;

export default FooterContent;
