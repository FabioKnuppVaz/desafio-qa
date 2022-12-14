@Tendencias
Feature: Buscar tendencias

  @Buscar_tendencias
  Scenario Outline: Validar a busca de tendencias
    Given realizar requisicao de busca de tendencia "<mediaType>" "<timeWindow>" "pt-BR"
    Then validar o resultado da busca de tendencia "<mediaType>"

    Examples:
      | mediaType | timeWindow |
      | movie     | day        |
      | tv        | day        |
      | person    | day        |
      | movie     | week       |
      | tv        | week       |
      | person    | week       |