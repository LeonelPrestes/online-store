import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "src/data/produtcts";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "src/redux/Cart/cart-slice";
const cart = products.slice(0, 2);

const mockDispatch = jest.fn();

//Mock: tornar a boblioteca react-redux fake
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit test", () => {
  it("should render an empty cart correctrl", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list");

    // Visualizar o que tem dentro do elemento
    // screen.debug(cartListElement)

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElements = screen.getAllByRole("listitem");
    const firstProductTitleElement = screen.getByText(products[0].title);
    const secondProductTitleElement = screen.getByText(products[1].title);

    expect(productsItemElements.length).toBe(2);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(firstProductTitleElement);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(secondProductTitleElement);
  });

  it("should remove product when remove button is clicked", () => { 
      render(<Cart showCart={true} cart={[products[0]]} />);

      const removeProductButton = screen.getByRole('button', { name: 'Remover'})

      userEvent.click(removeProductButton)

      expect(mockDispatch).toHaveBeenCalled()
      expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]))
    });
});