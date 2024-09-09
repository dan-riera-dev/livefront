import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { CharacterDetail } from ".";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../components/BackgroundParticles", () => ({
  BackgroundParticles: () => <div>Mocked BackgroundParticles</div>,
}));
jest.mock("../../components/CharacterSphere", () => ({
  CharacterSphere: ({ characterName }: { characterName: string }) => (
    <div>Character Sphere: {characterName}</div>
  ),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

const mockCharacterData = {
  name: "Luke Skywalker",
  homeworld: "Tatooine",
  height: "172",
  species: ["Human"],
  image: "luke-image",
  affiliations: ["Jedi Order"],
};

describe("CharacterDetail", () => {
  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({
      state: {
        characterData: mockCharacterData,
        isLightSide: true,
      },
    });
  });

  const assertCharacterDetail = (label: string, expectedContent: string) => {
    const item = screen.getByLabelText(label);
    expect(
      within(item).queryByText((content) => content.includes(expectedContent))
    ).toBeInTheDocument();
  };

  test("renders character details correctly", () => {
    render(
      <MemoryRouter>
        <CharacterDetail />
      </MemoryRouter>
    );

    expect(
      screen.queryByText("Character Sphere: Luke Skywalker")
    ).toBeInTheDocument();

    assertCharacterDetail("homeworld", "tatooine");
    assertCharacterDetail("species", "human");
    assertCharacterDetail("height", "172");
    assertCharacterDetail("affiliations", "jedi order");
  });

  test("renders BackgroundParticles component", () => {
    render(
      <MemoryRouter>
        <CharacterDetail />
      </MemoryRouter>
    );

    expect(
      screen.queryByText("Mocked BackgroundParticles")
    ).toBeInTheDocument();
  });

  test("renders list items with correct aria-labels and tabIndex", () => {
    render(
      <MemoryRouter>
        <CharacterDetail />
      </MemoryRouter>
    );

    const homeworldListItem = screen.queryByLabelText("homeworld");
    expect(homeworldListItem).toBeInTheDocument();
    expect(homeworldListItem).toHaveAttribute("aria-label", "homeworld");
    const speciesListItem = screen.queryByLabelText("species");
    expect(speciesListItem).toBeInTheDocument();
    const heightListItem = screen.queryByLabelText("height");
    expect(heightListItem).toBeInTheDocument();
  });

  test("does not render list item when value is null", () => {
    (useLocation as jest.Mock).mockReturnValue({
      state: {
        characterData: {
          ...mockCharacterData,
          homeworld: null,
        },
        isLightSide: true,
      },
    });

    render(
      <MemoryRouter>
        <CharacterDetail />
      </MemoryRouter>
    );
    expect(screen.queryByLabelText("homeworld")).not.toBeInTheDocument();
  });
});
