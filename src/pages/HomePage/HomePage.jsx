import { Helmet } from 'react-helmet-async';
import css from './HomePage.module.css';
import firstPicture from './tulips-min.jpg';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <div className={css.homePageContainer}></div>
      <div className={css.imgWrap}>
        <img src={firstPicture} alt="tulips" className={css.homePageImg} />
      </div>

      <div className={css.circle}>
        <p>Welcome to our site, hello🎉!</p>
      </div>
    </>
  );
};

export default HomePage;
