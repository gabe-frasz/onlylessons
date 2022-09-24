import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Lesson } from "./Lesson";

describe("Lesson component", () => {
  describe("title and type props", () => {
    afterEach(() => {
      cleanup();
    });

    it("should render title", () => {
      render(
        <Lesson type="live" title="some" slug="some" availableAt={new Date()} />
      );

      expect(screen.getByText(/some/i)).toBeInTheDocument();
    });

    it("should render type practical class", () => {
      render(
        <Lesson
          type="class"
          title="some"
          slug="some"
          availableAt={new Date()}
        />
      );

      expect(screen.getByText(/practical class/i)).toBeInTheDocument();
    });

    it("should render type live", () => {
      render(
        <Lesson type="live" title="some" slug="some" availableAt={new Date()} />
      );

      expect(screen.getByText(/live/i)).toBeInTheDocument();
    });
  });

  describe("availableAt prop", () => {
    it("should be available if date is past", () => {
      render(
        <Lesson
          type="live"
          title="some"
          slug="some"
          availableAt={new Date(2022, 1, 1)}
        />
      );

      expect(screen.getByText(/available/i)).toBeInTheDocument();
    });

    it("should not be available if date is not past", () => {
      render(
        <Lesson
          type="live"
          title="some"
          slug="some"
          availableAt={new Date(2045, 1, 1)}
        />
      );

      expect(screen.getByText(/soon/i)).toBeInTheDocument();
    });
  });
});
