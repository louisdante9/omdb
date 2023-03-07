import { render } from '@testing-library/react';
import App from './App';

import useMediaQuery from "./hooks/useMediaQuery";


jest.mock('./hooks/useMediaQuery', ()=> ({
    __esModule: true,
    default: jest.fn()
}))

beforeEach(()=> {
    useMediaQuery.mockImplementation(()=> false)
})

afterEach(()=> {
    jest.clearAllMocks();
})

test('renders correctly', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toBeInTheDocument();
})