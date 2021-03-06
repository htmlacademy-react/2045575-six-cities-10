import { generatePath, Link } from 'react-router-dom';
import { AppRoute, CardClassName, CardImageSize} from '../../const';
import { Property } from '../../types/property';

const ONE_STAR_PERCENTAGE = 100 / 5;

type PropertyCardProps = {
  property: Property;
  cardClassName: CardClassName;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activeCardId: number | null;
};

export default function PropertyCard(props: PropertyCardProps): JSX.Element {
  const {
    property,
    cardClassName,
    activeCardId,
    onMouseEnter,
    onMouseLeave} = props;
  const {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type} = property;

  const getRatingPercentage = (): string => `${rating * ONE_STAR_PERCENTAGE}%`;

  const getActivatedCardBorderStyle = () => {
    if (activeCardId === id) {
      return {
        border: '1px solid black'
      };
    }
  };

  return (
    <article
      className={`${cardClassName}__card place-card`}
      onMouseEnter={() => onMouseEnter?.()}
      onMouseLeave={() => onMouseLeave?.()}
      style={getActivatedCardBorderStyle()}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={ generatePath(AppRoute.Property, { id: `${id}`}) }>
          <img
            className="place-card__image"
            src={previewImage}
            width={CardImageSize[cardClassName].width}
            height={CardImageSize[cardClassName].height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardClassName === CardClassName.Favorites && 'favorites__card-info'}`}>
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
          <Link to={ generatePath(AppRoute.Property, { id: `${id}`}) }>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
