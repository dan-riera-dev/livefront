import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CharacterSphere } from "../../components/CharacterSphere";
import defaultImage from "../../assets/images/errorImage.png";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: false,
  })
) as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("CharacterSphere Component", () => {
  test("renders Light Side character correctly with keyboard focus", async () => {
    await act(async () => {
      render(
        <CharacterSphere
          characterName="Luke Skywalker"
          characterImage="valid-image-url"
          isLightSide={true}
        />
      );
    });

    const characterName = await waitFor(() =>
      screen.getByLabelText(/Character name: Luke Skywalker/i)
    );
    const container = screen.getByRole("group", {
      name: /Image of Luke Skywalker, aligned with the Light Side/i,
    });
    expect(container).toHaveAttribute("tabIndex", "0");
    expect(characterName).toHaveTextContent("luke skywalker");
    const image = screen.getByAltText(/Portrait of Luke Skywalker/i);
    await waitFor(() => {
      expect(image).toHaveClass("lightSphereContainer");
    });
  });

  test("renders Dark Side character correctly", async () => {
    await act(async () => {
      render(
        <CharacterSphere
          characterName="Darth Vader"
          characterImage="valid-image-url"
          isLightSide={false}
        />
      );
    });

    const characterName = await waitFor(() =>
      screen.getByLabelText(/Character name: Darth Vader/i)
    );
    const container = screen.getByRole("group", {
      name: /Image of Darth Vader, aligned with the Dark Side/i,
    });

    expect(container).toHaveAttribute("tabIndex", "0");
    expect(characterName).toHaveTextContent("darth vader");
    const image = screen.getByAltText(/Portrait of Darth Vader/i);
    await waitFor(() => {
      expect(image).toHaveClass("darkSphereContainer");
    });
  });

  test("handles image loading error and uses fallback image", async () => {
    await act(async () => {
      render(
        <CharacterSphere
          characterName="Yoda"
          characterImage="invalid-image-url"
          isLightSide={true}
        />
      );
    });

    await waitFor(() => {
      const image = screen.getByAltText(/Portrait of Yoda/i);
      expect(image).toHaveAttribute("src", defaultImage);
    });
  });

  test("supports keyboard focus", async () => {
    await act(async () => {
      render(
        <CharacterSphere
          characterName="Han Solo"
          characterImage="valid-image-url"
          isLightSide={true}
        />
      );
    });

    const container = screen.getByRole("group", {
      name: /Image of Han Solo, aligned with the Light Side/i,
    });
    container.focus();
    expect(container).toHaveFocus();
  });
});
