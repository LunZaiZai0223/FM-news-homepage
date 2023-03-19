import s from './index.module.scss';

import retro from '../../assets/images/retro-pcs.jpg';
import laptops from '../../assets/images/top-laptops.jpg';
import gaming from '../../assets/images/gaming-growth.jpg';

const RECOMMENDATIONS: {
  title: string;
  description: string;
  imgSrc: string;
}[] = [
  {
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    imgSrc: retro,
  },
  {
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    imgSrc: laptops,
  },
  {
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    imgSrc: gaming,
  },
];

const RecommendList = () => {
  console.log(retro);
  return (
    <section>
      <ul className={`${s['recommendation-list']}`}>
        {RECOMMENDATIONS.map(({ title, description, imgSrc }, index) => {
          return (
            <li key={index} className={`${s['recommendation-item']}`}>
              <div className={s['img-wrapper']}>
                <img src={imgSrc} alt="recommendation" />
              </div>
              <div className={s['content-wrapper']}>
                <strong>{'0' + (index + 1)}</strong>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RecommendList;
