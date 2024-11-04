import App from './App';
import * as React from 'react';
import { render, screen } from '@testing-library/react';



describe("Tests the component in App.js", ()=> {
    it("test that App renders without crashing", ()=> {
        render(<App />);
    })

    it(" should contain the Notifications component", ()=> {
        render(<App />);
        expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
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
})
