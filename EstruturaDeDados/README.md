
# Atividade Avaliativa I - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Desenvolvimento de Sistemas
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Conceitos de entrada e saída de dados, variáveis, operadores, estruturas condicionais, estruturas de repetição e estruturas de dados.
- A entrega deverá ser feita no AVA. Deve ser enviado apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Questões

### Questão 01
Escreva um programa que solicite ao usuário uma nota de 0 a 100. O programa deve imprimir o conceito correspondente com base na tabela abaixo: 

  - Nota entre 90 e 100: "A"
  - Nota entre 80 e 89: "B"
  - Nota entre 70 e 79: "C"
  - Nota entre 60 e 69: "D"
  - Nota abaixo de 60: "F"

Se a nota inserida for inválida (menor que 0 ou maior que 100), o programa deve imprimir uma mensagem de erro.

---

### Questão 02
Escreva um programa que peça ao usuário a idade de uma pessoa e determine sua categoria com base nas seguintes regras:

  - Menor de 12 anos: "Criança"
  - De 12 a 17 anos: "Adolescente"
  - De 18 a 59 anos: "Adulto"
  - 60 anos ou mais: "Idoso"
  
---

### Questão 03
Escreva um programa que simule o jogo "Pedra, Papel e Tesoura". O usuário deve informar sua escolha, e o computador deve fazer uma escolha aleatória. O programa deve determinar 
o vencedor com base nas seguintes regras:

  - Pedra vence Tesoura.
  - Tesoura vence Papel.
  - Papel vence Pedra.

---

### Questão 04
Crie um programa de adivinhação de números. O computador deve escolher aleatoriamente um número entre 1 e 100, e o usuário deve tentar adivinhar. 
Após cada tentativa, o programa deve informar se o número correto é maior ou menor que a tentativa. O jogo termina quando o usuário acertar o número.

---

### Questão 05
Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. Nesse momento será 
analisada apenas a quantidade de gols, passes certos e passes errados. (Utilize Vetor e Objeto)

    Cada Gol: 50 Pontos
    Cada Passe Certo: 10 Pontos
    Cada Passe Errado: -5 Pontos

Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. O algoritmo deve calcular a pontuação de cada jogador e informar se o jogador foi bem ou mal na partida, levando como base a seguinte tabela. No final, deve apresentar o jogador com melhor pontuação. Lembre-se que um time de futebol tem 10 jogadores de linha.

    Pontuação < 50 - Péssima partida.
    Pontuação de 50 até 100 - Partida ruim.
    Pontuação de 100 até 150 - Fez o básico
    Pontuação de 150 até 200 - Foi bem na partida
    Pontuação acima de 200 - Jogou demais

---

### Questão 06
Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. Armazene os dados em um vetor de objetos. Ao final, o programa deve:
  - Imprimir o nome e o preço de cada produto.
  - Calcular e exibir o preço médio dos produtos.
  - Calcular e exibir o preço total

---

