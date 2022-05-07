# Respostas
Pesquise sobre os niveis de maturidade de Richardson e responda:
1) qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?
Resposta: Nível II de maturidade faz uso eficiente de URIs de verbos HTTTP. 
 
2) qual a relação entre os metodos HTTP e o CRUD?
Resposta: O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP). Cada um deles implementa uma semântica diferente, mas alguns recursos são compartilhados por um grupo deles, como por exemplo, qualquer método de requisição pode ser do tipo safe, idempotent ou cacheable.
A API do REST oferece suporte aos seguintes métodos HTTP para manipular os recursos:
POST (CREATE) cria um recurso.
GET (READ) retorna uma representação de um recurso.
PUT (UPDATE) atualiza um recurso existente.
DELETE exclui o recurso.
Esse conjunto de métodos é denominado CRUD

3) o que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?
Resposta: HATEOAS é um componente que faz parte da arquitetura REST, cujo objetivo é ajudar os clientes a consumirem uma API sem a necessidade de conhecimento prévio. De acordo com o modelo de maturidade de Richardson, o HATEOAS é considerado o último nível de uma API RESTful. Desta forma, caso esteja procurando definir uma API que siga o padrão RESTful, o HATEOAS deve ser implementado nela.

4) O que quer dizer quando dizemos que uma API é idempotente?
Resposta: Uma API é idempotente quando o endpoint pode ser chamado várias vezes sem resultados diferentes. Não importa se o método é chamado apenas uma ou dez vezes. O resultado deve sempre o mesmo. Isso se aplica apenas ao resultado, não ao próprio recurso.

5) Qual a diferença entre os métodos PUT e PATCH?
Resposta: O PUT pode atualizar um recurso, mas o retorno do Servidor deve ser sempre igual. Independente de quantas veze for feito a mesma chamada.
O PATCH é similar ao PUT porém o PATCH não é Idempotente, enquanto o PUT é. Nesse caso o patch pode ser utilizado em uma chamada de atualização que tem resultados diferentes.

6) Do arquivo filmes.js retorne no terminal o Titulo, Ano e Genero. (desafio: apresente cada Genero em linhas separadas)
7) Do arquivo colors-rgb retorne no terminal o RGB como no exemplo: "aliceblue RGB: 240, 248, 255, 1"
8) Do arquivo estados-cidade dado uma sigla retorne no terminal o lista de cidades