import { render, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

const mockHandleChangePage = jest.fn();

afterEach(()=> {
    jest.clearAllMocks();
})

test('Pagination renders buttons', () => {
    const { queryByText } = render(<Pagination page={1} totalPage={5} handlePageClick={mockHandleChangePage}/>)
    expect(queryByText('next')).toBeInTheDocument()
    expect(queryByText('previous')).toBeInTheDocument()
    expect(queryByText(/previous/i).closest('button')).toHaveAttribute('disabled');
})
test('Pagination renders first page button', () => {
    const { queryByText } = render(<Pagination page={2} totalPage={5} handlePageClick={mockHandleChangePage}/>)
    expect(queryByText('previous')).toBeInTheDocument()
    expect(queryByText(/previous/i).closest('button')).not.toHaveAttribute('disabled');
})
test('first page button calls the change handler ', () => {
    const { queryByText } = render(<Pagination page={2} totalPage={5} handlePageClick={mockHandleChangePage}/>)
    const firstPageButton = queryByText('first')
    fireEvent.click(firstPageButton)
    expect(queryByText(/previous/i).closest('button')).not.toHaveAttribute('disabled');
    expect(mockHandleChangePage).toHaveBeenCalledTimes(1)
})