import App from './App';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(()=> {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(()=> {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Tests the component in App.js", ()=> {
    it("test that App renders without crashing", ()=> {
        render(<App />);
    })

    it(" should contain the Notifications component", ()=> {
        render(<App />);
        expect(screen.getByText("Your notifications")).toBeInTheDocument();
    })

     it(" should contain the Header component", ()=> {
        render(<App />);
        expect(screen.getByText("School dashboard")).toBeInTheDocument();
    })

     it(" should contain the Login component", ()=> {
        render(<App />);
        expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    })

     it(" should contain the Footer component", ()=> {
        render(<App />);
        expect(screen.getByText(/Copyright/)).toBeInTheDocument();
    })

    it(" when isLoggedIn is true", ()=> {
        render(<App isLoggedIn={true} />);
        expect(screen.queryByLabelText("Email:")).not.toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
    })

    it(`verify that when the keys control and h are pressed the logOut function,
        passed as a prop, is called and the alert function is called with the 
        string Logging you out`, async()=> {
            const logOutMock = jest.fn();
            const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

            const user = userEvent.setup();
            render(<App logOut={logOutMock}/>);
            await user.keyboard('{Control>}h{/Control}');
            expect(logOutMock).toHaveBeenCalled();
            expect(alertMock).toHaveBeenCalledWith('Logging you out');
            alertMock.mockRestore();
        })
})
