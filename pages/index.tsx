import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

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
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>TONYSTREET</h1>
        <div className={styles.iconWrap}>
          <i className={`${styles.icon} ${styles.iconSearch}`}></i>
          <i className={`${styles.icon} ${styles.iconCart}`}></i>
        </div>
      </section>

      <section className={styles.categoryContainer}>
        <ul className={styles.categoryWrap}>
          <li className={styles.category}>홈</li>
          <li className={styles.category}>특가</li>
          <li className={styles.category}>베스트</li>
          <li className={styles.category}>신상</li>
          <li className={styles.category}>기획전</li>
          <li className={styles.category}>이벤트</li>
          <li className={styles.category}>리뷰</li>
        </ul>
      </section>

      <section className={styles.bannerSlide}>
        <ul
          className={styles.slideWrap}
          style={{ width: width }}
          onMouseUp={() => {
            alert("gdgd");
          }}
        >
          <li className={styles.slide}>
            <img
              style={{ width: width }}
              className={styles.bannerImg}
              src="https://d384glw2wph2ce.cloudfront.net/IMG1618lP206426409.jpg"
            />
          </li>
          <li className={styles.slide}>
            <img
              style={{ width: width }}
              className={styles.bannerImg}
              src="https://d384glw2wph2ce.cloudfront.net/IMG1618sF366944802.jpg"
            />
          </li>
          <li className={styles.slide}>
            <img
              style={{ width: width }}
              className={styles.bannerImg}
              src="https://d384glw2wph2ce.cloudfront.net/IMG1617dS005804100.jpg"
            />
          </li>
        </ul>
      </section>

      <section className={styles.recommendProductContainer}>
        <h2 className={styles.mainTitle}>추천상품</h2>
        <ul className={styles.productWrap}>
          <li className={styles.product}>
            <img
              className={styles.image}
              style={{ width: width / 2 - 15 }}
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            />
            <div className={styles.brand}>CONCHIC</div>
            <div className={styles.title}>컨시크 컬러마크 워터 젤틴트</div>
            <div className={styles.priceInfo}>
              <span className={styles.percent}>93%</span>
              <span className={styles.retailPrice}>15,000</span>
              <span className={styles.salePrice}>990원</span>
            </div>
          </li>
          <li className={styles.product}>
            <img
              className={styles.image}
              style={{ width: width / 2 - 15 }}
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            />
            <div className={styles.brand}>CONCHIC</div>
            <div className={styles.title}>컨시크 컬러마크 워터 젤틴트</div>
            <div className={styles.priceInfo}>
              <span className={styles.percent}>93%</span>
              <span className={styles.retailPrice}>15,000</span>
              <span className={styles.salePrice}>990원</span>
            </div>
          </li>
          <li className={styles.product}>
            <img
              className={styles.image}
              style={{ width: width / 2 - 15 }}
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            />
            <div className={styles.brand}>CONCHIC</div>
            <div className={styles.title}>컨시크 컬러마크 워터 젤틴트</div>
            <div className={styles.priceInfo}>
              <span className={styles.percent}>93%</span>
              <span className={styles.retailPrice}>15,000</span>
              <span className={styles.salePrice}>990원</span>
            </div>
          </li>
        </ul>
      </section>

      <section className={styles.imageBannerWrap}>
        <img
          className={styles.bannerImg}
          src="https://d384glw2wph2ce.cloudfront.net/IMG1618Wi810051312.jpg"
        />
        <img
          className={styles.bannerImg}
          src="https://d384glw2wph2ce.cloudfront.net/IMG1618hS810055969.jpg"
        />
      </section>

      <section className={styles.bestContainer}>
        <div className={styles.titleWrap}>
          <span>이 시각, 인기 절정 베스트</span>
          <i>{">"}</i>
        </div>
        <ul className={styles.hotItemList}>
          <li className={styles.hotItemWrap}>
            <span className={styles.bestOrder}>1</span>
            <img
              className={styles.image}
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            ></img>
            <div className={styles.productInfo}>
              <span className={styles.brand}>CONCHIC</span>
              <span className={styles.title}>컨시크 컬러마크 워터 젤 틴트</span>
              <span className={styles.price}>15000원</span>
              <div>
                <span className={styles.tag}>무료배송</span>
              </div>
              <span className={styles.soldout}>일시품절</span>
            </div>
          </li>
          <li className={styles.hotItemWrap}>
            <span className={styles.bestOrder}>2</span>
            <img
              className={styles.image}
              src="https://tonystreet.com/UPLOAD/UPLOAD_IMAGE/C020/202005/IMG1591zRt325089538_500.jpg"
            ></img>
            <div className={styles.productInfo}>
              <span className={styles.brand}>CONCHIC</span>
              <span className={styles.title}>컨시크 컬러마크 워터 젤 틴트</span>
              <span className={styles.price}>15000원</span>
              <div>
                <span className={styles.tag}>무료배송</span>
              </div>
              <span className={styles.soldout}>일시품절</span>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
