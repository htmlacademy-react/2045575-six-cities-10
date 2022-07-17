import { ImageSize } from '../../const';
import { Properties } from '../../types/property';
import PropertyCard from '../property-card/property-card';

type PropertyListProps = {
  properties: Properties;
  cardClassName: keyof typeof ImageSize;
}

export default function PropertyList({properties, cardClassName}: PropertyListProps): JSX.Element {
  return (
    <>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} cardClassName={cardClassName}/>
      )
      )}
    </>
  );
}
