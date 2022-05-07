1- MODELO SERVER/CLIENT 

1.1 - URI - identificador de recurso universal: é a união do PROTOCOLO - URL - URN ("https://www.reprograma.com.br/equipe")

    PROTOCOLO: "http" --> é como se fosse um 'acordo' entre back e front para que independete da linguagem que for utilizada para desenvolver uma ferramenta, o http seja utilizado para acessar. 

    URL - LOCALIZADOR DE RECURSO UNIVERSAL: é o endereço do servidor ("WWW.REPROGRAMA.COM.BR")

    URN - NOME DE RECUSOS UNIVERAL: é o recurso (/EQUIPE)

    *Obs.: Diferença entre http e https --> httpS significa que está criptogrado (Segurança), quando um site tem somente http não costuma ser seguro.


1.2 - O REQUEST É ENVIADO

    cliente: site
    quando a gente pesquisa alguma coisa, o cliente envia uma requisição através de uma a "http request" para o servidor
    o servidor envia a resposta através de uma "http response" por meio de um CRUD

(*CRUD: CREATE, READ, UPDATE, DELETE)

    verbos HTTP:
    - GET: LER
    - POST: CRIAR
    - PUT: SUBSTITUIR
    - PATCH: MODIFICAR
    - DELETE: EXCLUIR 

1.3 - MENSAGENS
 https://http.cat/ 

1.4 - FINALMENTE ACESSA O SITE
    
1.5 - DEV FRONT/BACK

1.6 - API (INTERFACE DE PROGRAMAÇÃP DE APLICATIVOS)
    
INTERFACE QUE ME DA POSSIBILIDADE DE PROGRAMAR 
CRIA FORMAS E FERRAMENTAS DE SE USAR UMA FUNCIONALIDADE OU UMA INFORMAÇÃO SEM REALMENTE TER QUE REINVENTAR A TAL FUNÇÃO.

lib = library = biblioteca: chama ela para usar alguma coisa que tem ali dentro. Menos complexa que framework

framework: mais complexo que lib. 
    explicação google: "Um framework em desenvolvimento de software, é uma abstração que une códigos comuns entre vários projetos de software provendo uma funcionalidade genérica. Um framework pode atingir uma funcionalidade específica, por configuração, durante a programação de uma aplicação." 
    
1.6.1 - WEB API's

    são conexões externas. São um conjunto de instruções e padrões de programação para acesso a m aplicativo de software. Uma empresa disponibiliza sua API para o pulico de modo que outros criadores possam desenvolver seus produtos acionados por esse serviço.
        exemplo: quando eu vou fazer um cadastro e o site sugere que eu faça login com conta google

1.6.2 - API's públicas

    São disponibilizadas gratuitamente para construir uma aplicação. 

1.6.3 - API's privadas

    Oposto da pública. Existem casos que são de comunicação internas ou que precisa-se pagar por ela. 
    
Obs.: uma mesma empresa pode ter API's públicas e privadas.

1.6.4 API's REST e RESTfull

    REST E RESTFULL são as mesmas coisas.
    Trata-se de um conjunto de regras para uma API
    REST é a regra
    RESTFULL é a aplicação da regra.

2 - JSON

Notação de objetos JS -> é uma formatação leve de troca de dados.
JSON utiliza "aspas duplas"

3 - CONSUMINDO API 
https://ghibliapi.herokuapp.com/# 



