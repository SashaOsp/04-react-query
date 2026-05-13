import axios from "axios";
import type { Movie } from "../types/movie";

export interface GetMovieResponse {
  results: Movie[];
  total_pages: number;
}

const movieKey = import.meta.env.VITE_TMDB_TOKEN;
const url = "https://api.themoviedb.org/3/search/movie";

export default async function fetchMovies(
  query: string,
  page: number,
): Promise<GetMovieResponse> {
  const { data } = await axios.get<GetMovieResponse>(url, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${movieKey}`,
    },
  });

  return data;
}
