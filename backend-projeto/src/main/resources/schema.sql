CREATE TABLE parcela (
     id               INT NOT NULL,
     qtd_parcela      INT NOT NULL,
     valor_parcela    FLOAT
);

CREATE TABLE produto (
     id                 INT NOT NULL,
     nome_produto       VARCHAR(255) NOT NULL,
     imagem_produto     VARCHAR(500),
     preco_antigo       FLOAT,
     preco_atual        FLOAT,
     descricao          VARCHAR(500),
     parcela_id         INT NOT NULL
);