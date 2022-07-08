import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  placeCardsCount: number;
}

export default function App({placeCardsCount}: AppProps): JSX.Element {
  return (
    <MainScreen
      placeCardsCount={placeCardsCount}
    />
  );
}
