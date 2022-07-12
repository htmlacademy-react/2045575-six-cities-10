import { AppRoute, AutorizationStatus } from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AutorizationStatus;
  children: JSX.Element
}

export default function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
