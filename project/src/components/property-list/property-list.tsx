import { Properties } from '../../types/property';
import PropertyCard from '../property-card/property-card';

type PropertyListProps = {
  properties: Properties
}

export default function PropertyList({properties}: PropertyListProps): JSX.Element {
  return (
    <>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property}/>
      )
      )}
    </>
  );
}
