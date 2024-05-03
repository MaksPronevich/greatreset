import { render, screen } from '@testing-library/react'
import React from 'react'

test('Hello world test', () => {
  render(<h1>Hello</h1>)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
