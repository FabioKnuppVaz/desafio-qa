@Tendencias
Feature: Buscar tendencias

  @Buscar_tendencias
  Scenario Outline: Buscar tendencias
    Given realizar requisicao de busca de tendencia "<mediaType>" "<timeWindow>"
    Then validar o resultado da busca de tendencia "<mediaType>"

    Examples:
      | mediaType | timeWindow |
      | movie     | day        |
      | tv        | day        |
      | person    | day        |
      | movie     | week       |
      | tv        | week       |
      | person    | week       |