# Respostas



1. qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?
API REST Maturidade 2 - Na criação de uma tela de cadastro, é de importância que as operações simples sejam implementadas. Nesse nível de maturidade a mesma ideia deve ser utilizada com os verbos HTTP, eles devem ser suficientes para um CRUD (Crate, Read, Update, Delete).

2. qual a relação entre os metodos HTTP e o CRUD?
 Os verbos HTTP parecem estar diretamente ligados ao CRUD, permitindo uma interação a partir dos recursos de uma API, pois os quatro principais métodos HTTP (GET, PUT, POST e DELETE) podem ser mapeados para operações CRUD.


3. o que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?
HATEOAS faz parte da arquitetura REST, qual o objetivo é ajudar os clientes a consumirem uma API sem a necessidade de conhecimento prévio. Segundo o modelo de maturidade de Richardson, o HATEOAS é considerado o último nível de uma API RESTful.


4. O que quer dizer quando dizemos que uma API é indempotente?
"O método PUT é idempotente. Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada." Ou seja, uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado.


5. Qual a diferença entre os métodos PUT e PATCH?
Ambos são usados para indicar um requisição de alteração de dados. 
O PUT é usado para alteração de um dado completo, já o PATCH é usado para atualização parcial.
