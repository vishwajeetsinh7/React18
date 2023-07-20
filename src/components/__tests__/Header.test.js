import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rdr header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");
  //Check if the logo is Loaded
  expect(logo.src).toBe("http://localhost/dummyLogo.png");
});

test("online status should be green ", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("card should have 0 items", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("0");
});
