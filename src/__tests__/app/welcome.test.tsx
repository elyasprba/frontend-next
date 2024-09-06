import { fireEvent, render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

import WelcomePage from '@/app/welcome/page'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Welcome Page', () => {
  const mockPush = jest.fn()

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
  })

  it('render text content', () => {
    render(<WelcomePage />)

    expect(screen.getByText('Welcome!')).toBeInTheDocument()
    expect(
      screen.getByText('Get a cup of coffee for free only for new user'),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Create New Account' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('redirects to /register on "Create New Account" button click', () => {
    render(<WelcomePage />)

    fireEvent.click(screen.getByRole('button', { name: 'Create New Account' }))

    expect(mockPush).toHaveBeenCalledWith('/register')
  })

  it('redirects to /login on "Login" button click', () => {
    render(<WelcomePage />)

    fireEvent.click(screen.getByRole('button', { name: 'Login' }))

    expect(mockPush).toHaveBeenCalledWith('/login')
  })
})
