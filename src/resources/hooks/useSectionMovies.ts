import { apiTMDB, API_KEY } from '@services/api';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

type IMoviesSection = {
  netflixOriginal: IMovie[];
  documentary: IMovie[];
  trending: IMovie[];
  horror: IMovie[];
  romance: IMovie[];
};

export type IMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export const useSectionMovies = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [moviesSection, setMoviesSection] = useState<IMoviesSection>(
    {} as IMoviesSection,
  );

  const getAllMoviesSection = useCallback(async () => {
    setLoading(true);

    try {
      const [netflixOriginal, documentary, trending, horror, romance] =
        await Promise.all([
          apiTMDB.get(
            `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
          ),
          apiTMDB.get(
            `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
          ),
          apiTMDB.get(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`),
          apiTMDB.get(
            `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
          ),
          apiTMDB.get(
            `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
          ),
        ]);

      setMoviesSection({
        netflixOriginal: netflixOriginal.data.results,
        documentary: documentary.data.results,
        trending: trending.data.results,
        horror: horror.data.results,
        romance: romance.data.results,
      });
    } catch (err) {
      Alert.alert('Error on get movies');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllMoviesSection();
  }, [getAllMoviesSection]);

  return {
    loading,
    moviesSection,
  };
};
