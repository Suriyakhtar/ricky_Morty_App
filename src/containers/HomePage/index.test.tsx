import axios from "axios"
import { Character } from "../../types/Character";
describe("Characters api list", () => {
    it("verify characters list api is working", async () => {
        const result = await axios.get<{
            results: Character[]
        }>(`https://rickandmortyapi.com/api/character`);
        expect(Array.isArray(result.data.results)).toBeTruthy()
        expect(result.data.results.length).toBeGreaterThan(0);
        expect(result.status).toBe(200);
    });
});

export { }