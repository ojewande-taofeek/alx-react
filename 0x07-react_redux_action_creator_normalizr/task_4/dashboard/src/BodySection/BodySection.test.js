import * as React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';

describe("Tests the BodySection Component", ()=> {
    it("checks that shallowing the component should render correctly the children and one h2 element", ()=> {
        render(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
            );
            expect(screen.getByRole("heading", {name: "test title"})).toBeInTheDocument();
            expect(screen.getByText("test children node")).toBeInTheDocument();
    });

})