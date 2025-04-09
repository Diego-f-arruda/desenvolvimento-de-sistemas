import { fireEvent, render, screen } from "@testing-library/react";
import TextareaCustom from ".";

describe('Componente Text Area', () => {
    it('Deve renderizar o componente com o placeholder correto ', () => {
        render(<TextareaCustom 
            message="Hello World" 
            setMessage={jest.fn()}
            title="Digite Aqui..."
            />
        )

        const textarea = screen.getByPlaceholderText("Digite Aqui...")
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveValue("Hello World")
    });

    it('Deve renderizar o componente e chamar a função quando o valor for alterado ', () => {
        
        const setMessage = jest.fn();

        render(<TextareaCustom 
            message="Hello World" 
            setMessage={setMessage}
            title="Digite Aqui..."
            />
        )

        const textarea = screen.getByPlaceholderText("Digite Aqui...")
        fireEvent.change(textarea, {target: {value: 'Novo valor'}})

        expect(setMessage).toHaveBeenCalled
        expect(setMessage).toHaveBeenCalledTimes(1)
        expect(setMessage).toHaveBeenCalledWith("Novo valor")


    });
});