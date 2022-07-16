import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Property } from '../../types/property';

const ONE_STAR_PERCENTAGE = 20;

type PropertyCardProps = {
  property: Property
};

export default function PropertyCard({property}: PropertyCardProps): JSX.Element {
  const {
    // city,
    // host,
    // location,
    // bedrooms,
    // description,
    // goods,
    // id,
    // images,
    // isFavorite,
    // isPremium,
    // maxAdults,
    previewImage,
    price,
    rating,
    title,
    type} = property;

  const getRatingPercentage = (): string => `${rating * ONE_STAR_PERCENTAGE}%`;

  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Property}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingPercentage() }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Property}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
