import { fireEvent, render, screen } from "@testing-library/react";
import Comment from ".";

const mockComment = {
  //Mock serve para passar informações variaveis falsas para testar o codigo
  id: "1",
  like: 3,
  comment: "olá tudo certo",
  publishedAt: new Date(),
  author: {
    name: "Joe Doe",
    role: "Dev",
    avatarUrl: "joedoe.png",
  },
};

describe("Componente Comment", () => {
  it("Deve renderizar um comentario ", () => {
    render(
      <Comment
        comment={mockComment}
        handleDelete={jest.fn()}
        handleLike={jest.fn()}
      />
    );
    expect(screen.getByText("Joe Doe")).toBeInTheDocument();
    expect(screen.getByText("olá tudo certo")).toBeInTheDocument();
    expect(screen.getByText("Aplaudir")).toBeInTheDocument();
    expect(screen.getByText("há menos de um minuto")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("Deve verificar se a função handleLike foi chamada com ID correto ", () => {
    const handleLike = jest.fn();
    render(
      <Comment
        comment={mockComment}
        handleDelete={jest.fn()}
        handleLike={handleLike}
      />
    );

    const likeButton = screen.getByText("Aplaudir")
    fireEvent.click(likeButton)

    expect(handleLike).toHaveBeenCalled(); //espera que a função seja chamada
    expect(handleLike).toHaveBeenCalledTimes(1); //espera que a função seja chamada apenas uma vez
    expect(handleLike).toHaveBeenCalledWith(expect.any(Object), "1") //espera qualquer objeto e apos o id referente ao comentario mocado
    
});

it("Deve verificar se a função handleDelete foi chamada com ID correto ", () => {
    const handleDelete = jest.fn();
    render(
      <Comment
        comment={mockComment}
        handleDelete={handleDelete}
        handleLike={jest.fn()}
      />
    );

    const deleteButton = screen.getByTestId("button-delete")
    fireEvent.click(deleteButton)

    expect(handleDelete).toHaveBeenCalled(); //espera que a função seja chamada
    expect(handleDelete).toHaveBeenCalledTimes(1); //espera que a função seja chamada apenas uma vez
    expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1") //espera qualquer objeto e apos o id referente ao comentario mocado
    
});


});
