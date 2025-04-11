import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Feed from "./page";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>; //Simulação da biblioteca do axios dentro do teste

const mockPosts = [
  {
    id: "1",
    content: "Post 1",
    publishedAt: new Date("2024-04-10").toISOString(),
    author: {
      name: "Joe Doe",
      role: "Dev",
      avatarUrl: "url-fake",
    },
    comments: [],
  },
  {
    id: "2",
    content: "Post 2",
    publishedAt: new Date("2024-04-11").toISOString(),
    author: {
      name: "Joe Doe",
      role: "Dev",
      avatarUrl: "url-fake",
    },
    comments: [],
  },
];

describe("Pagina do Feed", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({ data: mockPosts }); //
    mockAxios.post.mockRejectedValue({}); //Ira retornar um objeto vazio
  });
  it("Deve renderizar a pagina do Feed", async () => {
    render(<Feed />);

    expect(screen.getByText("Carregando...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Carregando...")).not.toBeInTheDocument(); //Quando não quero que encontre algo no documento
    });

    const posts = screen.getAllByTestId("post-test");

    expect(posts.length).toBe(2);
    expect(posts[0]).toHaveTextContent("Post 2");
    expect(posts[1]).toHaveTextContent("Post 1");

    const textarea = screen.getByPlaceholderText("O que você está pensando???");
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { current: "Meu novo Post"}})

});
});
