import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTARANT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTARANT_DATA),
  });
});

test("shimmer should load on the homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const Shimmer = body.getByTestId("shimmer");
  expect(Shimmer.children.length).toBe(10);
});

test("Restrauant should load on HomePage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Search for the sting(food) on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-btn"));
  });

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(1);
  console.log(resList.children);
});
