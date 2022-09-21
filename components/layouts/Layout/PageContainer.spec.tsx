import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Layout } from "./Layout";

describe("Layout layout component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render children correctly", () => {
    render(
      <Layout headTitle="test" description="testing Layout props">
        <span>Hello World</span>
      </Layout>
    );

    const dummyText = screen.getByText(/hello world/i);

    expect(dummyText).toBeInTheDocument();
  });
});
