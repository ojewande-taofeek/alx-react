import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App', () => {
  it('renders App component without crashing', () => {
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
    
});
