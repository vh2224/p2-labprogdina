package br.com.uvass.p2labprogdina.model.repository;

import br.com.uvass.p2labprogdina.model.entity.Produto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProdutoMapper implements RowMapper<Produto> {
    @Override
    public Produto mapRow(ResultSet resultSet, int i) throws SQLException {
        Produto produto = new Produto();
        produto.setId(resultSet.getInt("id"));
        produto.setNomeProduto(resultSet.getString("nome_produto"));
        produto.setImagemProduto(resultSet.getString("imagem_produto"));
        produto.setPrecoAntigo(resultSet.getFloat("preco_antigo"));
        produto.setPrecoAtual(resultSet.getFloat("preco_atual"));
        produto.setDescricao(resultSet.getString("descricao"));
        produto.setParcelaId(resultSet.getInt("parcela_id"));
        return produto;
    }
}
