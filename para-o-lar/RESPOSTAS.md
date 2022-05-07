# Respostas

//Qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?
Nível 2. Existem qutro níveis de maturidade API, eles vão do mais organizado ao 3. Sendo o 0 o mais desorganizado e que pode gerar mais problemas e 3, que é o mais organizado. A mesma forma de usar as práticas internas ao código, devemos pensar na melhor maneira de usar os recursos de uma API. As APIs de nível 0 utilizam apenas o verbo post. O problema deste tipo de API é que ele precisa de muita documentação para realizar os comandos. As APIs de nível 1 são um pouco mais organizadas. Quando uma URL é criada para cada recurso. Neste nível ainda é utilizado o POST. As APIs de maturidade de nível 2 utilizam os verbos HTTP de forma CRUD. Este nível de API é muito mais legível e reduz custos por ser de mais fácil consumo.

//Qual a relação entre os métodos HTTP e CRUD?
s verbos HTTP são: Post, Get, Put, Patch, Delete. As operações CRUD são: Criar, Ler, Atualizar/Substituir, Atualizar/Modificar, Excluir. O protocolo HTTP funciona com os clientes enviando pedidos para os servidores, e os servidores respondendo a estes pedidos. As operações CRUD são enviadas por meio de solicitações HTTP, feitas por meio de verbos. O CRUD é um acronímico que resume as quatro principais formas de intereção entre banco de dados e aplicações.

//O que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?
HATEOAS ou Hypermedia As the Engine Of Application State é um modelo simples e elegante com que uma API REST pode ser desenhada para que a mesma permita que aplicações que a consumam navegue entre seus recursos através de links e URLs sem a necessidade de conhecimento denso prévio sobre a API.Segundo o criador das API'S Roy Fielding, sua API só pode ser chamada de rest api quando ela estiver no terceiro nível de maturidade. 

//O que quer dizer quando dizemos que uma API é indepotente?
A API oferece suporte à idempotência para retentar requisições de maneira segura sem executar acidentalmente a mesma operação mais de uma vez. Esse recurso é útil quando uma chamada de API é interrompida em trânsito antes do recebimento do response.

//Qual a diferença entre os métodos PUT e PATCH?
os métodos HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados. PUT: é quando é feita uma requisição a um recurso para modificá-lo. Nesse método  irá mudar todo os dados do recurso. PATCH: Usamos quando vamos alterar alguns dados de um recurso. Ele não pode criar um novo recurso como é feito no put.
