package br.com.uvass.p2labprogdina.controller;

import br.com.uvass.p2labprogdina.model.entity.Produto;
import br.com.uvass.p2labprogdina.model.repository.ProdutoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    private ProdutoRepository produtoRepository;

    public ProdutoController(JdbcTemplate jdbcTemplate) {
        produtoRepository = new ProdutoRepository(jdbcTemplate);
    }

    @CrossOrigin("*")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/")
    public ArrayList<Produto> procurarProduto() throws Exception {
        return produtoRepository.buscarProdutos();
    }
}
