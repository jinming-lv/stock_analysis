import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrandMark } from '../BrandMark';

describe('BrandMark', () => {
  it('renders the square icon mark with the brand icon', () => {
    render(<BrandMark variant="icon" size={40} />);
    const img = screen.getByAltText('如意金股') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe('/brand/icon.svg');
    expect(img.getAttribute('width')).toBe('40');
    expect(img.getAttribute('height')).toBe('40');
  });

  it('renders the full wordmark and respects forced theme', () => {
    const { rerender } = render(<BrandMark variant="full" size={56} forceTheme="light" />);
    let img = screen.getByAltText('如意金股 RuyiDailyStockAnalysis') as HTMLImageElement;
    expect(img.getAttribute('src')).toBe('/brand/logo-light.svg');
    expect(img.getAttribute('height')).toBe('56');

    rerender(<BrandMark variant="full" size={56} forceTheme="dark" />);
    img = screen.getByAltText('如意金股 RuyiDailyStockAnalysis') as HTMLImageElement;
    expect(img.getAttribute('src')).toBe('/brand/logo-dark.svg');
  });
});
