import {render, cleanup, fireEvent} from "@testing-library/react";
import LogoutButton from "../components/LogoutButton";
import {logout} from "../api/fetchUtils.ts";

afterEach(cleanup);

jest.mock('../api/fetchUtils.ts', ()=>{
    return{
        logout:jest.fn(),
    }
})

describe("logout button calls the logout function", ()=>{
    test("Log out on click", () =>{
        const {getByTestId} = render(<LogoutButton />);
        fireEvent.click(getByTestId("logout-button"));
        expect(logout).toHaveBeenCalled();
    })
})