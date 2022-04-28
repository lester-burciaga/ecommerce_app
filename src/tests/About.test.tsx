import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import About from "@pages/About";

describe("<About />", () => {
  test("should display about page", () => {
    render(<About />, { wrapper: MemoryRouter });

    const title = screen.getByRole("heading", { level: 1 });
    const link = screen.getByRole("link", { name: /contact us/i });
    const image = screen.getByRole("img", { name: /about us/i });
    const description = screen.getByText((content) =>
      content.startsWith("Lorem Ipsum")
    );

    expect(title).toHaveTextContent(/about us/i);
    expect(link).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
