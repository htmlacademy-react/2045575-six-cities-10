import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Properties } from '../../types/property';

type AppProps = {
  properties: Properties
}

export default function App({properties}: AppProps): JSX.Element {
  const getFavoriteProperties = () => properties.filter(({isFavorite}) => isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen properties={properties}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AutorizationStatus.Auth}
            >
              <FavoritesScreen favoriteProperties={getFavoriteProperties()}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
          element={<PropertyScreen/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
