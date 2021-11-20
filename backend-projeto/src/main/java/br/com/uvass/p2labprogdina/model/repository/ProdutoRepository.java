package br.com.uvass.p2labprogdina.model.repository;

import br.com.uvass.p2labprogdina.model.entity.Parcela;
import br.com.uvass.p2labprogdina.model.entity.Produto;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;

public class ProdutoRepository {

    private JdbcTemplate jdbcTemplate;
    private ParcelaRepository parcelaRepository;

    public ProdutoRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.parcelaRepository = new ParcelaRepository(jdbcTemplate);
    }

    public ArrayList<Produto> buscarProdutos() throws Exception {
        String sql = "SELECT * FROM produto";
        ArrayList<Produto> buscar = (ArrayList<Produto>) jdbcTemplate.query(sql, new ProdutoMapper());

        buscar.forEach(produto -> {
            Parcela parcela = parcelaRepository.buscarParcela(produto.getParcelaId());
            produto.setParcela(parcela);
        });

        if (buscar.size() > 0) {
            return buscar;
        }

        throw new Exception("Nenhum produto encontrado");
    }

}
