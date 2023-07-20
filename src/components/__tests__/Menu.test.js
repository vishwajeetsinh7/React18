import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTARANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("ADD ITEMS TO CART", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("menu"));
  });
  const menu = body.getByTestId("menu");
  const addTocart = body.getByTestId("addtocart");

  fireEvent.click(addTocart);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("1");
});
