import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: ' 1° Comentário adicionado',
            }
        });
        fireEvent.click(screen.getByTestId('comentario-butao'));

        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: '2° comentário adicionado',
            }
        });
        fireEvent.click(screen.getByTestId('comentario-butao'));

        expect(screen.getAllByTestId('comentario-elemento')).toHaveLength(2);
    });
});