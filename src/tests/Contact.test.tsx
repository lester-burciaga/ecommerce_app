import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Contact from "@pages/Contact";

describe('<Contact />', () => {
    test('should display contact page', () => {
        render(<Contact />, { wrapper: MemoryRouter });

        const title = screen.getByRole("heading", {level: 1});
        const teamImage = screen.getByRole("img", {name:/contact us/i});
        const submitButton = screen.getByRole("button", {name:/send message/i});
        const labelName = screen.getByText(/full name/i);
        const labelEmail = screen.getByText(/email address/i);
        const labelTextArea = screen.getByText(/example textarea/i);
        const inputName = screen.getByPlaceholderText(/john smith/i);
        const inputEmail = screen.getByPlaceholderText(/name@example.com/i);
        const inpuTextArea = screen.getByRole("textbox", {name:/example textarea/i})

        expect(title).toHaveTextContent(/have some questions\?/i);
        expect(teamImage).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
        expect(labelName).toBeInTheDocument();
        expect(labelEmail).toBeInTheDocument();
        expect(labelTextArea).toBeInTheDocument();
        expect(inputName).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inpuTextArea).toBeInTheDocument();

    })
})