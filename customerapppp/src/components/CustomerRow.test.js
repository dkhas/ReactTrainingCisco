import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

describe("testing customer row in isloation", () => {
    let callback = null;
    let c = null;

    beforeEach(() => {
        c = {
            id: 134,
            firstName: 'Harry',
            lastName : 'Potter'
        };
        callback = jest.fn(); // mock a callback
    });

    it("disply customer row", () => {
        render(<CustomerRow customer={c} delEvent={(id) => callback(id)}/>);
        const divElement = screen.getByText(/Harry/i);
        expect(divElement).toBeInTheDocument();
    });
    it("delete customer row", () => {
        render(<CustomerRow customer={c} delEvent={(id) => callback(id)}/>);
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(134);
    });
});