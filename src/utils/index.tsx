import axios from "axios";
import { Character, CharacterApiPaginationInfo } from "../types/Character";
export const BASE_URL = 'https://rickandmortyapi.com/api/character'


export const fetchChar = async (page = 1, query: any) => {
	return await axios
		.get<{
			results: Character[]
			info: CharacterApiPaginationInfo
		}>(`${BASE_URL}`, {
			params: {
				page: page,
				name: query.get("q")
			},
		})
};