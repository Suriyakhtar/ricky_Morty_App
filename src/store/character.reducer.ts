import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Character,
  CharacterApiPaginationInfo,
  RecentlyVisitedProfile,
} from "../types/Character";

export interface CharacterState {
  character: Character[];
  characterLoading: boolean;
  pagination: CharacterApiPaginationInfo;
  recentlyVisitedProfiles: RecentlyVisitedProfile[];
  error: string;
  singleCharacter: Character | null;
}

export const characterInitialState: CharacterState = {
  character: [],
  singleCharacter: null,
  pagination: {
    count: 0,
    pages: 0,
    prev: "",
    next: "",
  },
  characterLoading: false,
  recentlyVisitedProfiles: [],
  error: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState: characterInitialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<Character[]>) => {
      state.character = action.payload;
    },
    setCharacterLoading: (state, action: PayloadAction<boolean>) => {
      state.characterLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSingleCharacter: (state, action: PayloadAction<Character>) => {
      state.singleCharacter = action.payload;
    },
    setPagination: (
      state,
      action: PayloadAction<CharacterApiPaginationInfo>
    ) => {
      state.pagination = action.payload;
    },
    setRecentlyVisitedProfiles: (
      state,
      action: PayloadAction<RecentlyVisitedProfile[]>
    ) => {
      state.recentlyVisitedProfiles = action.payload;
    },
  },
});

export const {
  setCharacter,
  setCharacterLoading,
  setRecentlyVisitedProfiles,
  setPagination,
  setError,
  setSingleCharacter,
} = characterSlice.actions;
