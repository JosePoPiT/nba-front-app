export interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  height: string;
  weight: string;
  image: string;
  championships: number;
  mvps: number;
  devensive_player_award: number;
  home_town: string;
  avgPoints: number;
  avgRebounds: number;
  avgSteals: number;
  avgAssists: number;
}

export interface PlayerDetail {
  id: number;
  playerId: number;
  curiosities: string;
  birthDate: string;
  retired: boolean;
  college: string;
  highSchool: string;
  totalPoints: number;
  totalRebounds: number;
  totalAssists: number;
  totalSteals: number;
  totalBlocks: number;
  totalThreePointers: number;
  playoffPoints: number;
  playoffRebounds: number;
  playoffAssists: number;
  mvpTitles: number;
  defensivePlayerAwards: number;
  allStarSelections: number;
  olympicMedals: string | null;
  notableInjuries: string | null;
  retiredJerseyTeams: string | null;
}
