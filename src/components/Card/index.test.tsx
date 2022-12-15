import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Card from "./index"


export default global.matchMedia =
    global.matchMedia ||
    function (query) {
        return {
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        };
    };

test('Should be render component', async () => {

    await render(<Card name={"test"} status={"Alive"} id={0} image={"test"} />)
    const card = screen.getByTestId('card-test');
    expect(card).toBeInTheDocument();

})