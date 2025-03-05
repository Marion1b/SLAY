import {render, screen} from "@testing-library/react";
import App from "../pages/App";

describe("App", ()=> {
    test("renders heading", async()=>{
        render(<App />);
        expect(screen.getByRole('heading', {name: "SLAY"})).toBeInTheDocument();
    });
});