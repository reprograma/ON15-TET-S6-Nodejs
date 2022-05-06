# Respostas

1. Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?

- Nível 2, já que faz uso dos verbos HTTP de forma eficiente, de modo que as API's se aproximam do esperado no RESTful;

2. Qual a relação entre os metodos HTTP e o CRUD?

- CRUD (Create, Read, Update and Delete) é um acrônimo de quatro operações básicas utilizadas para maneiras de se operar em uma informação armazenada. O HTTP é um protocolo de comunicação para transmissão de documentos de hipermídia e define oito métodos (GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS e CONNECT) que indicam a ação a ser realizada no recurso especificado. Dessa forma, é uma relação de correspondência com as operações do CRUD e os métodos do protocolo HTTP, para interação dentro de uma API;

3. O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?

- HATEOAS(Hypermedia as the Engine of Application State) é uma restrição da arquitetura de aplicativos REST que a distingue de outras arquiteturas de aplicativos de rede. Com o HATEOAS, um cliente interage com um aplicativo de rede cujos servidores fornecem informações dinamicamente por meio de hipermídia. Um cliente REST precisa de pouco ou nenhum conhecimento prévio sobre como interagir com um aplicativo ou servidor além de um entendimento genérico de hipermídia. Usando HATEOAS a resposta da API acrescenta também links descritivos que servem para informar como você pode alterar o recurso e informações de como buscar recursos secundários ou relacionados.

4. O que quer dizer quando dizemos que uma API é idempotente? 

- Significa que uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado.

5. Qual a diferença entre os métodos PUT e PATCH?

- O PATCH é utilizado para promover atualizações parciais, enquanto o PUT faz uma alteração total em um documento.

