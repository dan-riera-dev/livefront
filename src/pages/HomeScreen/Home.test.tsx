import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";
import { act } from "react";

jest.mock("../../components/BackgroundParticles", () => ({
  BackgroundParticles: jest.fn(() => <div>Mocked BackgroundParticles</div>),
}));

describe("Home component", () => {
  test("renders title and links correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const lightSideLink = screen.getByLabelText("Choose the Light Side");
    const darkSideLink = screen.getByLabelText("Choose the Dark Side");

    expect(screen.getByText("Choose your side")).toBeInTheDocument();
    expect(lightSideLink).toHaveAttribute("href", "/faction");
    expect(darkSideLink).toHaveAttribute("href", "/faction");
  });

  test("should render correctly when BackgroundParticles component fails to load", () => {
    jest.mock("../../components/BackgroundParticles", () => {
      return () => null;
    });
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
    jest.unmock("../../components/BackgroundParticles");
  });
});
