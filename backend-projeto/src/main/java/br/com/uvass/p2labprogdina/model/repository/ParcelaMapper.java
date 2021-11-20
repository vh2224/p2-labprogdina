package br.com.uvass.p2labprogdina.model.repository;

import br.com.uvass.p2labprogdina.model.entity.Parcela;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ParcelaMapper implements RowMapper<Parcela> {
    @Override
    public Parcela mapRow(ResultSet resultSet, int i) throws SQLException {
        Parcela parcela = new Parcela();
        parcela.setId(resultSet.getInt("id"));
        parcela.setQtdParcela(resultSet.getInt("qtd_parcela"));
        parcela.setValorParcela(resultSet.getFloat("valor_parcela"));
        return parcela;
    }
}
