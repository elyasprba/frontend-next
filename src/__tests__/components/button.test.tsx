import Button from '@/components/button/button'
import { fireEvent, render } from '@testing-library/react'

describe('Button', () => {
  it('should render button', () => {
    const { getByText } = render(<Button title="test" isBrown={true} />)
    expect(getByText('test')).toBeInTheDocument()
  })

  it('should render disabled button', () => {
    const { getByText } = render(
      <Button title="test" isBrown={true} disabled={true} />,
    )
    expect(getByText('test')).toBeDisabled()
  })

  it('should render button with brown color', () => {
    const { getByText } = render(<Button title="test" isBrown={true} />)
    expect(getByText('test')).toHaveClass('bg-brown')
  })

  it('should render button with yellow color', () => {
    const { getByText } = render(<Button title="test" isBrown={false} />)
    expect(getByText('test')).toHaveClass('bg-yellow')
  })

  it('should call onClick function', () => {
    const mockFn = jest.fn()
    const { getByText } = render(
      <Button title="test" isBrown={true} onClick={mockFn} />,
    )
    fireEvent.click(getByText('test'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
