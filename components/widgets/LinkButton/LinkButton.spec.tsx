import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { LinkButton } from "./LinkButton";

describe("LinkButton component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should have border class if variant border is chosen", () => {
    render(<LinkButton variant="border">link</LinkButton>);

    expect(screen.getByRole("link", { name: "link" })).toHaveClass("border");
  });

  it("should render default variant if no one was chosen or default was selected", () => {
    render(<LinkButton>another link</LinkButton>);

    expect(screen.getByRole("link", { name: "another link" })).toHaveClass(
      "bg-green-500 hover:bg-green-700"
    );
    cleanup();

    render(<LinkButton variant="default">one more link</LinkButton>);

    expect(screen.getByRole("link", { name: "one more link" })).toHaveClass(
      "bg-green-500 hover:bg-green-700"
    );
  });
});
