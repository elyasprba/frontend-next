import { FormField } from '@/components/form/form-field'
import { render, screen } from '@testing-library/react'

describe('FormField', () => {
  const mockRegister = jest.fn()

  it('renders input with given props', () => {
    render(
      <FormField
        id="username"
        placeholder="Enter your username"
        type="text"
        register={mockRegister}
        error=""
      />,
    )

    const inputElement = screen.getByPlaceholderText('Enter your username')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('id', 'username')
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toHaveClass('form-input-auth')
  })

  it('renders error message when provided', () => {
    render(
      <FormField
        id="username"
        placeholder="Enter your username"
        type="text"
        register={mockRegister}
        error="Error message"
      />,
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('does not render error message when not provided', () => {
    render(
      <FormField
        id="username"
        placeholder="Enter your username"
        type="text"
        register={mockRegister}
        error=""
      />,
    )

    expect(screen.queryByText('Error message')).not.toBeInTheDocument()
  })
})
