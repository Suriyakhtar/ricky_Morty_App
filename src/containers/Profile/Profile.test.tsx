import axios from "axios"
import { Character } from "../../types/Character";
describe("Single Character api", () => {
  it("verify single character api works", async () => {
    const result = await axios.get<{
      results: Character[]
    }>(`https://rickandmortyapi.com/api/character`);
    const singleCharacter = await axios.get<Character>(`https://rickandmortyapi.com/api/character/${result.data.results[0].id}`);
    expect(singleCharacter.data.id).toBeGreaterThan(0);
    expect(singleCharacter.status).toBe(200);
  });
});

export { }