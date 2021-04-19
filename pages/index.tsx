import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setWidth(innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=2.0, user-scalable=yes"
        />
        <link rel="stylesheet" href="reset.css" />
      </Head>
      <TitleContainer className="titleContainer">
        <h1 className="title">TONYSTREET</h1>
        <div className="iconWrap">
          <i className="icon iconSearch"></i>
          <i className="icon iconCart"></i>
        </div>
      </TitleContainer>

      <CategoryContainer className="categoryContainer">
        <ul className="categoryWrap">
          <li className="category">홈</li>
          <li className="category">특가</li>
          <li className="category">베스트</li>
          <li className="category">신상</li>
          <li className="category">기획전</li>
          <li className="category">이벤트</li>
          <li className="category">리뷰</li>
        </ul>
      </CategoryContainer>

      <BannerSlide className="bannerSlide">
        <ul className="slideWrap" style={{ width: width }}>
          <li className="slide">
            <img
              style={{ width: width }}
              className="bannerImg"
              src="https://d384glw2wph2ce.cloudfront.net/IMG1618lP206426409.jpg"
            />
          </li>
          <li className="slide">
            <img
              style={{ width: width }}
              className="bannerImg"
              src="https://d384glw2wph2ce.cloudfront.net/IMG1618sF366944802.jpg"
            />
          </li>
          <li className="slide">
            <img
              style={{ width: width }}
              className="bannerImg"
              src="https://d384glw2wph2ce.cloudfront.net/IMG1617dS005804100.jpg"
            />
          </li>
        </ul>
      </BannerSlide>

      <RecommendProductContainer className="recommendProductContainer">
        <h2 className="mainTitle">추천상품</h2>
        <ul className="productWrap">
          <li className="product">
            <img
              className="image"
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            />
            <div className="brand">CONCHIC</div>
            <div className="title">컨시크 컬러마크 워터 젤틴트</div>
            <div className="priceInfo">
              <span className="percent">93%</span>
              <span className="retailPrice">15,000</span>
              <span className="salePrice">990원</span>
            </div>
          </li>
          <li className="product">
            <img
              className="image"
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            />
            <div className="brand">CONCHIC</div>
            <div className="title">컨시크 컬러마크 워터 젤틴트</div>
            <div className="priceInfo">
              <span className="percent">93%</span>
              <span className="retailPrice">15,000</span>
              <span className="salePrice">990원</span>
            </div>
          </li>
        </ul>
      </RecommendProductContainer>
    </>
  );
};

const RecommendProductContainer = styled.section`
  margin: 30px 15px 0;
  .mainTitle {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .productWrap {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    .product {
      .image {
        width: 50%;
      }
      .brand {
        font-size: 1rem;
        font-weight: 600;
      }
      .title {
        font-size: 1rem;
      }
      .priceInfo {
        display: flex;
        span + span {
          margin-left: 5px;
        }
      }
    }
    .product + .product {
      margin-left: 10px;
    }
  }
`;

export default Home;

const TitleContainer = styled.section`
  box-sizing: border-box;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .iconWrap {
    display: flex;
    justify-content: space-between;

    .icon {
      display: inline-block;
      width: 25px;
      height: 25px;
      background-size: 25px 25px;
      background-repeat: no-repeat;
    }
    .iconSearch {
      background-image: url("/image/icon-search.png");
    }
    .iconCart {
      background-image: url("/image/icon-cart.png");
    }
    .icon + .icon {
      margin-left: 10px;
    }
  }
`;

const CategoryContainer = styled.section`
  margin: 30px 0 20px;
  .categoryWrap {
    display: flex;
    justify-content: space-around;
    .category {
      font-size: 1rem;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
    }
  }
`;

const BannerSlide = styled.section`
  .slideWrap {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;

    .slide {
      .bannerImg {
        width: 100%;
      }
    }
  }
`;
