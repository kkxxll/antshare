import { render } from '@testing-library/react'
import Button from '../Button/button'

test('button', () => {
  const warpper = render(<Button>Nice</Button>)
  const element = warpper.queryByText('Nice')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})
