export interface CharacterApiPaginationInfo {
  next: string;
  prev: string;
  count: number;
  pages: number;
}
export interface ICard {
  name: string;
  status: "Alive" | "Dead" | "unknown";
  id: number;
  image: string;
}

export interface Character extends ICard {
  created: string;
  gender: string;
  species: string;
  type: string;
  url: string;
  location: Location;
  origin: Origin;
  episode: string[];
}

export interface test {
  character: Character;
}

export interface Location {
  name: string;
  url: string;
}
export interface Origin {
  name: string;
  url: string;
}

export interface RecentlyVisitedProfile {
  label: string;
  id: number | string;
  image: string;
}
