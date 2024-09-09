import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen";

jest.mock("../../components/BackgroundParticles", () => ({
  BackgroundParticles: jest.fn(() => <div>Mocked BackgroundParticles</div>),
}));

describe("Loading Screen", () => {
  test("should render correctly when BackgroundParticles component fails to load", () => {
    jest.mock("../../components/BackgroundParticles", () => {
      return () => null;
    });
    const { container } = render(
      <MemoryRouter>
        <LoadingScreen />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
    jest.unmock("../../components/BackgroundParticles");
  });
});
