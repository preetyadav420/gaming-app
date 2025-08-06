import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GameResponse>("/games", {
        signal: controller.signal,
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
        },
      })
      .then((response) => {
        setGames(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [gameQuery.genre?.id, gameQuery.platform?.id]);

  return { games, isLoading, error };
};

export default useGames;
