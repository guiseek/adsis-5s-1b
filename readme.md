### Antes de iniciar execute

1. `npm install`
1. `npm run dev:server`
1. `npm run dev`

---

1. Escreva um código para um formulário usando HTML semântico e contendo:
	- campo para email
	- campo para senha
	- botão para login

<br>

2. Usando TypeScript, crie uma classe com nome `Credenciais`, que receba 2 parametros no construtor:
	- email, publico e do tipo string
	- senha, publico e do tipo string

<br>

3. Execute a tentativa de login da seguinte forma:
	1. Intercepte o evento de `submit` do formulário
	1. Crie uma instância da classe `Credenciais` contendo os dados do formulário
	1. Use a função `login` para enviar uma requisição ao servidor na `url` http://localhost:3000/api/login
	1. Apresente a mensagem de retorno como texto interno do elemento `<output>`
