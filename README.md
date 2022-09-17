# desafio-qa
Foram criadas duas issues neste projeto para armazenar o relatório em excel feito para os testes de front-end e outra para armazenar o postman e sua environment no mapeamento dos cenários que foram automatizados. Para rodar os testes automatizados basta clonar este projeto e seguir as instruções abaixo.

### _Relatório do teste de front-end_ ###
[excel](https://github.com/FabioKnuppVaz/desafio-qa/issues/1)

### _Postman dos testes manuais do backend_ ###
[collection e environment](https://github.com/FabioKnuppVaz/desafio-qa/issues/2)

### _Suite automatizada_ ###
Requerimentos:

- S.O de criação (Windows 10 - 64 bits)
- [Node: v16.17.0](https://nodejs.org/en/download/#:~:text=Windows%20Installer%20(.msi))
- [Git](https://git-scm.com/downloads#:~:text=Amazon.com.-,Downloads,-macOS)
- [Cucumber](https://cucumber.io/docs/installation/javascript/#:~:text=npm%20install%20%2D%2Dsave%2Ddev%20%40cucumber/cucumber)
- [Cucumber pretty-formatter](https://www.npmjs.com/package/@cucumber/pretty-formatter#:~:text=npm%20install%20%2D%2Dsave%2Ddev%20%40cucumber/pretty%2Dformatter%20%40cucumber/cucumber)
- [Visual studio code](https://code.visualstudio.com/download#:~:text=ARM-,System%20Installer,-64%20bit)
- [Plugin cucumber visual studio code](https://github.com/alexkrechik/VSCucumberAutoComplete)

Etapas de configuração:
1) Clonar o projeto  
```sh
$ git clone https://github.com/FabioKnuppVaz/desafio-qa.git
```
2) Baixar dependencias
```sh
$ cd desafio-qa
$ npm install
```
3) Rodar os testes
```sh
$ cd desafio-qa
$ npm test
```

> Nota: se quiser rodar um teste em especifico adicionar no arquivo "package.json" no objeto "scripts" na propriedade "test" `--tags @Listas_desejos` por exemplo.
 
 4) O relatório será publicado no servidor do cucumber. Ao fim da execução será apresentado no console o link com seguinte informação:
 ```sh
View your Cucumber Report at:                                           
https://reports.cucumber.io/reports/a8b56d3a-27d4-4fcb-a375-7e66c31b0846
                                                                        
This report will self-destruct in 24h.                                  
Keep reports forever: https://reports.cucumber.io/profile               
```

> Nota: O teste de deletar lista está retornando 500 portanto está falhando.