import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FactionScreen } from "../FactionScreen";
import { useFetch } from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../hooks/useFetch");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));
jest.mock("../../components/BackgroundParticles", () => ({
  BackgroundParticles: jest.fn(() => <div>Mocked BackgroundParticles</div>),
}));

const mockCharacters = [
  {
    id: 1,
    name: "Luke Skywalker",
    affiliations: ["Jedi Order"],
    image: "luke-image",
  },
  {
    id: 2,
    name: "Darth Vader",
    affiliations: ["Sith"],
    image: "vader-image",
  },
];

describe("FactionScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("navigates to error screen when there is an error", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: false,
      error: true,
    });

    (useLocation as jest.Mock).mockImplementation(() => ({
      state: { isLightSide: true },
    }));

    render(
      <MemoryRouter>
        <FactionScreen />
      </MemoryRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith("/error");
  });
  test("renders light side characters correctly", async () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: mockCharacters,
      loading: false,
      error: null,
    });

    (useLocation as jest.Mock).mockImplementation(() => ({
      state: { isLightSide: true },
    }));

    render(
      <MemoryRouter>
        <FactionScreen />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("welcome to the resistance")).toBeInTheDocument();
      expect(screen.getByText("luke skywalker")).toBeInTheDocument();
      expect(screen.queryByText("darth vader")).not.toBeInTheDocument();
    });
  });

  test("renders dark side characters correctly", async () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: mockCharacters,
      loading: false,
      error: null,
    });

    (useLocation as jest.Mock).mockReturnValue({
      state: { isLightSide: false },
    });

    render(
      <MemoryRouter>
        <FactionScreen />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("welcome to the first order")
      ).toBeInTheDocument();
      expect(screen.getByText("darth vader")).toBeInTheDocument();
      expect(screen.queryByText("luke skywalker")).not.toBeInTheDocument();
    });
  });
});
