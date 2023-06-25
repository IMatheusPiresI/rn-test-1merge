import { IMovie } from '@resources/hooks/useSectionMovies';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      App: undefined;
      Authentication: undefined;
      SignIn: undefined;
      Register: undefined;
      Home: undefined;
      ExtraPage: undefined;
      MovieDetail: { movie: IMovie };
      Camera: undefined;
    }
  }
}
