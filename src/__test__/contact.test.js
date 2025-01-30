import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact up test cases", () => {
  it("Test contact page", () => {
    render(<Contact />);
    const text = screen.getByText("Hello from Contact");
    expect(text).toBeInTheDocument();
  });

  //   describe("Nest1", () => {
  //     it("Test contact page 2", () => {
  //       const renderOutput = render(<Contact />);
  //       const button = screen.getAllByText("Submit");
  //       expect(button.length).toBe(1);
  //     });
  //   });
});
