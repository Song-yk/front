import React from 'react'; // eslint-disable-line no-unused-vars
import "./home.css";
import Navbar from '../navbar/navbar.jsx';
import Search from './Search.jsx';
import WchatBot from "../../assets/WchatBot.svg"; // 권혜민 추가
 
// 메인 페이지 문구
const MainText = () => (
  <section className="maintext">
    <h1>NongBu<br />Next Our New Generation, Better then Us</h1>
  </section>
);
 
// 메인 페이지 유튜브
const Youtube = () => (
  <section className="youtube-container">
    {/* <h3>공식 영상</h3> */}
    <div className="youtube">
      <iframe
        width="560"
        height="350"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="chatbot">
      <img src={WchatBot} alt="chatbot" />
    </div>
  </section>
);
 
// 메인 페이지 서비스 소개
const ServiceIntroduction = () => (
  <section className="service-intro">
    <h3>서비스 소개</h3>
    <p>농촌 지역 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다.<br />NongBu 서비스는 AI 기술을 이용하여 농업에서 사용되지 않거나 활용되지 않는 땅을 감지해 내고, 임대할 수 있도록 도와줍니다.</p>
    <p>AI 활용 농지 조사 시스템은 첨단 AI 기술로 저활용 농지를 탐지하여 임대 서비스를 제공합니다.<br />청년 농업인들이 쉽게 농업을 시작하고, 정부는 사용되지 않는 농지를 효율적으로 활용할 수 있도록 지원합니다.</p>
  </section>
);
 
// 메인 페이지 푸터
const Footer = () => (
  <footer className="footer">
    <p>이용약관 개인정보처리방침 뷰어다운로드 홍보리플릿</p>
    <p>(58327) 전남 나주시 그린로 20(빛가람동 358) 전화번호:1577-7770 사업자등록번호 123-82-08470 개인정보관리책임자 농지은행처장</p>
    <p>ⓒ 2024 20조. ALL RIGHTS RESERVED.</p>
  </footer>
);
 
const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="content">
        <MainText/>
        <Search />
        <Youtube />
        <ServiceIntroduction />
      </main>
      <Footer />
    </div>
  );
};
 
export default HomePage;