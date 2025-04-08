import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonCustom from '.';

describe('Test Button Custom', () => {
    it('Deve Renderizar o Componente Button Custom', () => {
        render(<ButtonCustom text='Entrar' handle={() => {}}/>)

        const button = screen.getByText("Publicar")

        expect(button).toBeInTheDocument();
    })

    it('Deve renderizar o componente e testar click no botão', () => {
        const handleMoch = jest.fn()
        render(<ButtonCustom text='Entrar' handle={handleMoch}/> )

        const button = screen.getByText('Entrar');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
    })
})