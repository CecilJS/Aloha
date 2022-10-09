/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const cta = screen.getByText("A Library of Helpful Articles");
    const ctaMessage = screen.getByText(
      "Discover helpful articles that can help you develop your craft"
    );

    const ctaButton = screen.getByText("GET STARTED");

    expect(cta).toBeInTheDocument();
    expect(ctaMessage).toBeInTheDocument();
    expect(ctaButton).toBeInTheDocument();
  });
});
