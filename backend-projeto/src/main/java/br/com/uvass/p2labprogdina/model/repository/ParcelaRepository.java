package br.com.uvass.p2labprogdina.model.repository;

import br.com.uvass.p2labprogdina.model.entity.Parcela;
import org.springframework.jdbc.core.JdbcTemplate;

public class ParcelaRepository {

    private JdbcTemplate jdbcTemplate;

    public ParcelaRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Parcela buscarParcela(int id) {
        String sql = "SELECT * FROM parcela WHERE id = ?";

        return jdbcTemplate.queryForObject(sql, new ParcelaMapper(), id);
    }
}
