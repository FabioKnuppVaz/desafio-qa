@Filmes
Feature: Buscar filmes

  @Buscar_filmes
  Scenario Outline: Buscar filmes
    Given realizar requisicao de busca de filme <page> "<search>"
    Then validar o resultado da busca de filme <page> <pages> <results> <id> "<result>"

    Examples:
      | page | pages | results | id     | search              | result                               |
      | 1    | 1     | 1       | 310307 | Fome de Poder       | Fome de Poder                        |
      | 1    | 1     | 2       | 106646 | lobo de wall street | O Lobo de Wall Street                |
      | 2    | 8     | 141     | 81234  | Star Wars           | LEGO Star Wars: Revenge of The Brick |