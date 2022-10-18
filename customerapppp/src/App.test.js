import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.getByText(/Customer Application/i);
  expect(h1Element).toBeInTheDocument();
});

it('renders customers', () => {
  render(<App />);
  let bts = screen.getAllByRole("button");
  expect(bts.length).toBe(6);
});

it("delete a customer", () => {
  // let {container} = render(<App/>);
  // let btns = container.querySelectorAll('button'); // low level DOM api
  render(<App />); 
  let btns = screen.getAllByRole("button");
  fireEvent.click(btns[2]);
  btns = screen.getAllByRole("button");
  expect(btns.length).toBe(5);
});

it("filter customers", () => {
  render(<App />);
  let txtBox = screen.getByPlaceholderText('search by name');
  fireEvent.change(txtBox, {"target": {"value": "Geller"}});
  screen.debug();
  let btns = screen.getAllByRole("button");
  expect(btns.length).toBe(2);
});
