# Respostas
Pesquise sobre os niveis de maturidade de Richardsson e responda:
1) qual nivel de maturidade corresponde ao CRUD (Create, Read, Update, Delete)?

Resposta: Corresponde ao nivel de maturidade 2.

2) qual a relação entre os metodos HTTP e o CRUD?

Resposta: A relação é que os verbos HTTP parecem estar diretamente ligado com o CRUD:

Create -> POST
Read -> GET
Update -> PUT / PATCH
Delete -> DELETE
 
3) o que é HATEOAS? Ele é obrigatório para que uma API seja considerada RESTfull?

Resposta: HATEOAS é um componente que faz parte da arquitetura REST, cujo objetivo é ajudar os clientes a consumirem uma API sem a necessidade de conhecimento prévio.De acordo com o modelo de maturidade de Richardson, o HATEOAS é considerado o último nível de uma API RESTful.Caso esteja procurando definir uma API que siga o padrão RESTful, o HATEOAS deve ser implementado nela.

4) O que quer dizer quando dizemos que uma API é indepotente?

Resposta:Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada.A API oferece suporte à idempotência para retentar requisições de maneira segura sem executar acidentalmente a mesma operação mais de uma vez. Esse recurso é útil quando uma chamada de API é interrompida em trânsito antes do recebimento do response.

5) Qual a diferença entre os métodos PUT e PATCH?

Resposta:O método de requisição PATCH aplica modificações parciais a um recurso. O método PUT permite apenas substituições completas de um documento. Em contraste ao PUT , o método PATCH não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos distintos.

