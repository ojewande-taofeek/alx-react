import * as React from 'react';
import { screen, render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe("Tests the BodySectionWithMargin component", ()=> {
    it(`shallowing the component should render correctly a BodySection
        component and that the props are passed correctly to the child component`, ()=> {
            const title = "With Margin Test";
            const text = "With Margin Children";
            render(<BodySectionWithMarginBottom title={title}>
                <p>{text}</p>
            </BodySectionWithMarginBottom>)
            expect(screen.getByText(text).closest(".bodySection")).toBeInTheDocument();
            expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(title);
            expect(screen.getByText(text)).toBeInTheDocument();
    });
});