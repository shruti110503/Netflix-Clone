import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/navbar";

describe("Navbar", () => {
  it("renders the logo", () => {
    render(<Navbar />);
    expect(screen.getByText("TaskFlow AI")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders get started button", () => {
    render(<Navbar />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });
});