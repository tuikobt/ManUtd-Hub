import { useState, useEffect, useMemo } from "react";

export const useMatchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/matches");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching match data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processedData = useMemo(() => {
    if (!data || !data.sports_results || !data.sports_results.games) {
      return { nextMatch: null, prevMatch: null };
    }
    const games = data.sports_results.games;

    const nextRaw = games.find((game) => !game.status || game.status !== "FT");

    let nextMatch = null;
    if (nextRaw) {
      const homeTeam = nextRaw.teams?.[0] || { name: "TBD" };
      const awayTeam = nextRaw.teams?.[1] || { name: "TBD" };

      nextMatch = {
        league: nextRaw.tournament || "Unknown League",
        time: `${nextRaw.date}${nextRaw.time ? ` • ${nextRaw.time}` : ""}`,
        home: {
          name: homeTeam.name,
          role: "Home",
        },
        away: {
          name: awayTeam.name,
          role: "Away",
        },
      };
    }

    const finishedGames = games.filter((g) => g.status === "FT");
    const prevRaw = finishedGames.length > 0 ? finishedGames[0] : null;

    let prevMatch = null;
    if (prevRaw) {
      const homeTeam = prevRaw.teams?.[0] || { name: "TBD", score: 0 };
      const awayTeam = prevRaw.teams?.[1] || { name: "TBD", score: 0 };

      prevMatch = {
        league: prevRaw.tournament || "Unknown League",
        time: prevRaw.date,
        home: {
          score: homeTeam.score,
          name: homeTeam.name,
        },
        away: {
          score: awayTeam.score,
          name: awayTeam.name,
        },
      };
    }

    return { nextMatch, prevMatch };
  }, [data]);

  return { ...processedData, loading };
};
