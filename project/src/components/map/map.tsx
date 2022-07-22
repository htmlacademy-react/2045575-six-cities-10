import { Properties, PropertyCity } from '../../types/property';
import {useRef, useEffect} from 'react';
import {Marker, Icon, LatLngExpression} from 'leaflet';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  currentCity: PropertyCity;
  currentProperties: Properties;
};

const prevMarkers: Marker<LatLngExpression>[] = [];

export default function Map({currentCity, currentProperties}: MapProps): JSX.Element {
  const {location: cityLocation} = currentCity;
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      if (prevMarkers.length) {
        prevMarkers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
      currentProperties.forEach(({location: point}) => {
        const marker = new Marker<LatLngExpression>({
          lat: point.latitude,
          lng: point.longitude
        });
        marker.setIcon(defaultCustomIcon)
          .addTo(map);
        prevMarkers.push(marker);
      });
    }
  }, [map, currentProperties]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
