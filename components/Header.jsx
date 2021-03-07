import React, { useEffect } from "react";
import useDeviceType from "components/util/useDeviceType";
const Header = () => {
  const { deviceType } = useDeviceType();
  console.log(deviceType);
  if (deviceType == 1) return <HeaderPC></HeaderPC>;
  else return <HeaderMob></HeaderMob>;
};
export default Header;

export const HeaderMob = () => {
  return (
    <>
      <section id="header-wrapper">
        <h1 id="header-title">TONYSTREET</h1>
        <ul id="header-customer">
          <li className="customer-icon">
            <i id="icon-search" />
          </li>
          <li className="customer-icon">
            <i id="icon-shoppingbag" />
          </li>
        </ul>
      </section>
      <style jsx>
        {`
        #header-wrapper {
            max-width: 640px;
            width: 100%;
            margin: 20px auto;
            text-align:center;
            position:relative;
          }
        #header-title{
          display:inline-block;
          font-size:20px;
          font-weight:bold;
        }
        #header-customer {
            position:absolute;
            display: inline-block;
            right:5px;
            top:-5px;
            margin-right:10px;
          }
        #header-customer li {
            display: inline-block;
            position: relative;
          }
          #header-customer li + li {
            margin-left: 20px;
          }
          #icon-search{
            display:inline-block;
            width:21px;
            height:21px;
            background-image:url("image/icon-search.png");
            background-size:contain;
            background-repeat:no-repeat;

          }
          #icon-shoppingbag{
            display:inline-block;
            width:25px;
            height:25px;
            background-image:url("image/icon-cart.png");
            background-size:contain;
            background-repeat:no-repeat;
          }
          .customer-icon .description{
            visibility:hidden;
          }
       `}

      </style>
    </>
  )
};

export const HeaderPC = () => {
  return (
    <>
      <section id="header-wrapper">
        <h1>TONYSTREET</h1>
        <span> 검색창</span>

        <section>
          <section id="header-general">
            <span id="icon-login">로그인</span>
            <span id="icon-register">회원가입</span>
            <span id="icon-customercenter">고객센터</span>
          </section>

          <ul id="header-customer">
            <li className="customer-icon">
              <i id="icon-mypage" />
              <span className="description">마이페이지</span>
            </li>
            <li className="customer-icon">
              <i id="icon-shoppingbag" />
              <span className="description">쇼핑백</span>
            </li>
            <li className="customer-icon">
              <i id="icon-recentlyproduct" />
              <span className="description">최근본상품</span>
            </li>
          </ul>
        </section>
      </section>
      <style jsx>
        {`
          #header-wrapper {
            display: flex;
            justify-content: space-between;
            max-width: 1280px;
            width: 100%;
            margin: 0 auto;
          }

          #icon-mypage {
            background: url("image/icon-gnb-mypage.png") no-repeat;
          }
          #icon-shoppingbag {
            background: url("image/icon-gnb-shopping.png") no-repeat;
          }
          #icon-recentlyproduct {
            background: url("image/icon-gnb-recent.png") no-repeat;
          }

          #header-customer {
   
          }
          #header-customer li {
            display: inline-block;
            position: relative;
          }
          #header-customer li + li {
            margin-left: 20px;
          }
          .customer-icon {
            position: relative;
            margin-top: 20px; /* 아이콘 높이 */
          }

          #header-customer i {
            height: 20px;
            width: 20px;
            background-size: 20px 20px;
            background-position: center;
            position: absolute;
            left: 50%;
            top: -150%;
            transform: translate(-50%, 0);
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};
