import { Properties, PropertyCity } from '../../types/property';
import LocationItem from '../location-item/location-item';

type LocationItemListProps = {
  properties: Properties;
  onClick: (city: PropertyCity) => void;
  currentCity: PropertyCity;
}

type UniqueCities = {
  [key: string]: PropertyCity;
}

export default function LocationItemList({properties, onClick, currentCity}: LocationItemListProps): JSX.Element {

  const uniqueCities = properties.reduce<UniqueCities>((acc, {city}) => {
    if (!acc[city.name]) {
      acc[city.name] = city;
    }

    return acc;
  }, {});

  return (
    <>
      {Object.values(uniqueCities)
        .map((city) => (
          <LocationItem key={city.name} city={city} onClick={onClick} currentCity={currentCity}/>
        )
        )}
    </>
  );
}
