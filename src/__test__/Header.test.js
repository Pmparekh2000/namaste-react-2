import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import "@testing-library/jest-dom";

it("Rendering header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const output = screen.getByRole("button");
  expect(output).toBeInTheDocument();
  console.log("output length is ", output.length);
});

it("Shuld change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  console.log("output before click is 1", loginButton);
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  console.log("output after click is 2", logoutButton);
});
