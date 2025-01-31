import { act, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { mockRestaurantsData } from "./mockData/restaurantsMockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockRestaurantsData);
    },
  });
});

describe("Body component", () => {
  test("Rendering the body component", async () => {
    await act(async () => render(<Body />));
    screen.getByRole("button", { name: "Search" });
  });
});
