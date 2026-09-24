import { render, screen } from '@testing-library/react';
import MessageCard from '../MessageCard';

// Mock the toast library
jest.mock('@/lib/toast', () => ({
  showToast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('MessageCard', () => {
  it('renders when revealed', () => {
    render(<MessageCard isRevealed={true} />);
    expect(screen.getByText(/Happy Birthday/i)).toBeInTheDocument();
  });

  it('does not render when not revealed', () => {
    const { container } = render(<MessageCard isRevealed={false} />);
    expect(container.firstChild).toBeNull();
  });
});

