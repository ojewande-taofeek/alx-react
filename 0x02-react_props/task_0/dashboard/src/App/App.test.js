import App from './App';
import * as React from 'react';
import { render } from '@testing-library/react';


describe("Tests the component in App.js", ()=> {
    it("test that App renders without crashing", ()=> {
        render(<App />);
    })
/*
    it("verify that App renders a div with the class App-header", () => {
        const { container } = render(<App />);
        const element = container.querySelector('.App-header');
        expect(element).toBeInTheDocument();
    })

    it("verify that App renders a div with the class App-body", ()=> {
        const { container } = render(<App />);
        const element = container.querySelector('.App-body');
        expect(element).toBeInTheDocument();
    })

    it("verify that App renders a div with the class App-footer", ()=> {
        const { container } = render(<App />);
        const element = container.querySelector('.App-footer');
        expect(element).toBeInTheDocument();
    })
*/
})
