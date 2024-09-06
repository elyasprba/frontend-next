import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('RootLayout', () => {
  it('renders children and ToastContainer', () => {
    render(
      <RootLayout>
        <div>Child Component</div>
      </RootLayout>,
    )

    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })
})
