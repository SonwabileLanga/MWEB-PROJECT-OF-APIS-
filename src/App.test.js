import React from 'react'
import { render, screen } from '@testing-library/react'

...

render(<div>Foo</div>)

expect(screen.getByText('Foo')).toBeInTheDocument()
