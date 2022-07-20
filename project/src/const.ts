export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/room/:id'
}

export const enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const enum CardClassName {
  Favorites = 'favorites',
  Cities = 'cities'
}

export const CardImageSize = {
  favorites: {
    width: 150,
    height: 110
  },
  cities: {
    width: 260,
    height: 200
  }
} as const;
