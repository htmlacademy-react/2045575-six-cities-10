import { useState } from 'react';
import { CardImageSize } from '../../const';
import { Properties } from '../../types/property';
import PropertyCard from '../property-card/property-card';

type PropertyListProps = {
  properties: Properties;
  cardClassName: keyof typeof CardImageSize;
}

export default function PropertyList({properties, cardClassName}: PropertyListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          activeCardId={activeCardId}
          onMouseEnter={() => setActiveCardId(property.id)}
          onMouseLeave={() => setActiveCardId(null)}
          cardClassName={cardClassName}
        />
      )
      )}
    </>
  );
}
