import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('renders AnimalForm', () => {
  render(<AnimalForm />);
})

test('user can fill out and submit the form',  async() => {
    render(<AnimalForm />);
    const speciesInput = screen.getByLabelText(/species/i)
    const ageInput = screen.getByLabelText(/age/i)
    const notesInput = screen.getByLabelText(/notes/i)


    fireEvent.change(speciesInput, { target:  {value: 'dog'}})
    fireEvent.change(ageInput, {target: {value: 'smooth'}});
    fireEvent.change(notes, {target: {value: 'roofs'}});


    expect(speciesInput).toHaveValue('dog')


    const button = screen.getByRole("button", { name: /submit!/i });
    fireEvent.click(button);
    // Sometimes in a form text may render before the form submits so you may need to run it async
    // Async version must use await and have async declared up before the parenthesis uptop 
    // const newAnimal = await screen.findByText(/dog/i)
    const newAnimal = await screen.findByText(/dog/i)
    // expect(newAnimal).toHaveValue(/dog/i)
    expect(newAnimal).toBeTruthy();
    expect(newAnimal).toHaveTextContent(/dog/i)

    // These can use aria roles 

})
  