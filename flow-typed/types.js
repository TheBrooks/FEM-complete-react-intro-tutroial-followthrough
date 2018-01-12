// @flow

export type Show = {
  title: string,
  description: string,
  imdbID: string,
  poster: string,
  year: string,
  trailer: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
