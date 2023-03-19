import s from './index.module.scss';

import mainNewsPc from '../../assets/images/web-3-desktop.jpg';
import mainNewsMobile from '../../assets/images/web-3-mobile.jpg';
import Button from '../UI/Button';
// import mainNewsMobile from '../../assets/images/image-web-3-mobile.png';

// constants
const SUB_NEWS = [
  {
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },

  {
    title: 'The Downsides of AI Artistry',
    description:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    description:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const News = () => {
  return (
    <section className={`${s['news-container']}`}>
      <div className={`${s['main-news']}`}>
        <div>
          <img
            src={mainNewsPc}
            alt="main news"
            className={`${s['pc-main-img']}`}
          />
          <img
            src={mainNewsMobile}
            alt="main news"
            className={`${s['mobile-main-img']}`}
          />
        </div>
        <div className={`${s['main-news-content']}`}>
          <h2>The Bright Future of Web 3.0?</h2>
          <div className={`${s.text}`}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button classes={s.btn}>Read more</Button>
          </div>
        </div>
      </div>
      <div className={`${s['sub-news']}`}>
        <h3>New</h3>
        <ul className={`${s['sub-news-list']}`}>
          {SUB_NEWS.map(({ title, description }, index) => {
            return (
              <li className={`${s['sub-news-item']}`} key={index}>
                <h4>{title}</h4>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;
