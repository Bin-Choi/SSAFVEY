import React from "react";
import { Link } from "react-router-dom";
import HomeCard1 from "../UI/HomeCardLeft";
import HomeCard2 from "../UI/HomeCardRight";

export default function Home(){
  return (
    <div>
      Home
      <Link to="/survey">
        설문하기
      </Link>
      <Link to="/makesurvey">
        설문만들기
      </Link>
      <Link to="/exchange">
        교환하기
      </Link>
      <Link to="/mypage">
        마이페이지
      </Link>
      <HomeCard1/>
      <HomeCard2/>

    </div>
  )
}