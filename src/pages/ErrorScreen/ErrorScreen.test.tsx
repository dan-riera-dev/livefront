import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ErrorScreen } from "../ErrorScreen";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../components/BackgroundParticles", () => ({
  BackgroundParticles: () => <div>Background Particles</div>,
}));

describe("ErrorScreen Component", () => {
  test("renders the ErrorScreen component correctly", () => {
    render(
      <MemoryRouter>
        <ErrorScreen />
      </MemoryRouter>
    );

    const errorImage = screen.getByRole("img");
    expect(errorImage).toBeInTheDocument();

    const title = screen.getByText(/beep boop beep../i);
    expect(title).toBeInTheDocument();

    const subHeader = screen.getByText(/please try again later/i);
    expect(subHeader).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("renders the BackgroundParticles component", () => {
    render(
      <MemoryRouter>
        <ErrorScreen />
      </MemoryRouter>
    );

    const backgroundParticles = screen.getByText(/Background Particles/i);
    expect(backgroundParticles).toBeInTheDocument();
  });
});
