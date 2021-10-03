import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("<Logo />", () => {
  it("returns accessibility attributes", () => {
    render(<Logo />);

    const logo = screen.getByTestId("logo");

    expect(logo).toHaveAttribute("role", "img");
    expect(logo).toHaveAccessibleName();
    expect(logo).toHaveAttribute("aria-label");
  });
});
