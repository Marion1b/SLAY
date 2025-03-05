import {render, cleanup} from "@testing-library/react";
import App from "../pages/App";

afterEach(cleanup);

describe("App", ()=> {
    test("should take a snapshot", ()=>{
        const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
});