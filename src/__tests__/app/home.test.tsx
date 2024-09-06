import { fireEvent, render, screen } from '@testing-library/react'

import HomePage from '@/app/page'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Home Page', () => {
  const mockReplace = jest.fn()

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ replace: mockReplace })
  })

  it('Render content and image', () => {
    render(<HomePage />)

    expect(screen.getByText('Coffee for Everyone')).toBeInTheDocument()

    expect(screen.getByTestId('get-started-image')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Get Started' }),
    ).toBeInTheDocument()
  })

  it('redirects to /welcome on "Get Started" button click', () => {
    render(<HomePage />)

    fireEvent.click(screen.getByRole('button', { name: 'Get Started' }))

    expect(mockReplace).toHaveBeenCalledWith('/welcome')
  })
})
