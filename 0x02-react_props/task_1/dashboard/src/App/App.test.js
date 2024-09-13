import * as React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render App component without crashing', () => {
    render(<App />);
  });
  
  it('renders a div with the class App-header', () => {
    const { container } = render(<App />); // note the {}
    const appHeader = container.querySelector('.App-header');
    expect(appHeader).toBeInTheDocument();


  });

  it('renders a div with class App-body', () => {
    const { container } = render(<App />);
    const appBody = container.querySelector('.App-body');
    expect(appBody).toBeInTheDocument();

  });

  it('renders a div with class App-footer', () => {
    const { container } = render(<App />);
    const appFooter = container.querySelector('.App-footer');
    expect(appFooter).toBeInTheDocument();

  });

  it('should contain the Notifications component', () => {
      render(<App />);
      expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  it("should contain the Header component", () => {
      render(<App />);
      expect(screen.getByText("School dashboard")).toBeInTheDocument();

  });

  it("should contain the Login component", () => {
    render(<App />);
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
  })

  it("should contain the Footer component", () => {
    render(<App />);
    expect(screen.getByText(/Copyright/)).toBeInTheDocument();
  });

   
});
