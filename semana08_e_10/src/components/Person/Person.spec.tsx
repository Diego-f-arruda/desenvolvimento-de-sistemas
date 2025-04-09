import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Person from '.';

describe("Componente Person", () => {
    it("Deve renderizar o componente de pessoa", () => {
        render(<Person nome="Joe Doe" idade={20} />)

        const name = screen.getByText("Joe Doe", {exact:false})
        const idade = screen.getByText("20", {exact:false})
        
        expect(name).toBeInTheDocument();
        expect(idade).toBeInTheDocument();

    })
})