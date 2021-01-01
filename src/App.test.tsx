import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('', () => {
  it('renders base ui', () => {
    render(<App/>);
    const linkElement = screen.getByText(/ee calculator/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('handles click', () => {
    render(<App/>);
    screen.getByText("1").click();
    screen.getByText("2").click();

    const resultValue = screen.getByText("12");
    
    expect(resultValue).toBeInTheDocument();
  });
});
