import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="reset.css" />
      </Head>
      <Header></Header>
    </>
  );
}

const Header = () => {
  return (
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
          <li>
            <i id="icon-mypage" />
            마이페이지
          </li>
          <li>
            <i id="icon-shoppingbag" />
            쇼핑백
          </li>
          <li>
            <i id="icon-recentlyproduct" />
            최근본상품
          </li>
        </ul>
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
            margin-top: 20px;
          }
          #header-customer li {
            display: inline-block;
            position: relative;
          }
          #header-customer li + li {
            margin-left: 20px;
          }

          #header-customer i {
            height: 20px;
            width: 20px;
            background-size: 20px 20px;
            background-position: center;

            position: absolute;
            left: 50%;
            top: -100%;
            transform: translate(-50%, 0);

            margin-bottom: 20px;
          }
        `}
      </style>
    </section>
  );
};
