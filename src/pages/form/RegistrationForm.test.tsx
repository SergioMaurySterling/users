import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationForm from "./RegistrationForm";

describe("RegistrationFormErrors", () => {
  it("should display error messages for empty fields", async () => {
    render(<RegistrationForm />);
    const button = screen.getByRole("button", { name: /register/i });
    userEvent.click(button);
    expect(screen.getByText("First name is required")).toBeInTheDocument();
    expect(screen.getByText("Last name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(screen.getByText("Phone is required")).toBeInTheDocument();
  });
  it("should submit the form when all fields are filled", async () => {
    render(<RegistrationForm />);
    const firstNameInput = screen.getByPlaceholderText("First Name");
    const lastNameInput = screen.getByPlaceholderText("Last Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const phoneInput = screen.getByPlaceholderText("Phone");

    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(emailInput, "john.doe@example.com");
    userEvent.type(passwordInput, "password123");
    userEvent.type(phoneInput, "1234567890");

    const button = screen.getByRole("button", { name: /register/i });
    userEvent.click(button);
  });
  it("should remove error messages when valid input is provided", async () => {
    render(<RegistrationForm />);
    const firstNameInput = screen.getByPlaceholderText("First Name");
    const lastNameInput = screen.getByPlaceholderText("Last Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const phoneInput = screen.getByPlaceholderText("Phone");
  
    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(emailInput, "john.doe@example.com");
    userEvent.type(passwordInput, "password123");
    userEvent.type(phoneInput, "1234567890");
  
    const button = screen.getByRole("button", { name: /register/i });
    userEvent.click(button);
  
    expect(screen.queryByText("First name is required")).toBeNull();
    expect(screen.queryByText("Last name is required")).toBeNull();
    expect(screen.queryByText("Email is required")).toBeNull();
    expect(screen.queryByText("Password is required")).toBeNull();
    expect(screen.queryByText("Phone is required")).toBeNull();
  });
  
});
