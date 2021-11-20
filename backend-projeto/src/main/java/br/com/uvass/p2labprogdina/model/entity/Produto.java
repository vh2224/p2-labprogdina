package br.com.uvass.p2labprogdina.model.entity;

public class Produto {
    private Integer id;
    private String nomeProduto;
    private String imagemProduto;
    private Float precoAntigo;
    private Float precoAtual;
    private String descricao;
    private Integer parcelaId;
    private Parcela parcela;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getImagemProduto() {
        return imagemProduto;
    }

    public void setImagemProduto(String imagemProduto) {
        this.imagemProduto = imagemProduto;
    }

    public Float getPrecoAntigo() {
        return precoAntigo;
    }

    public void setPrecoAntigo(Float precoAntigo) {
        this.precoAntigo = precoAntigo;
    }

    public Float getPrecoAtual() {
        return precoAtual;
    }

    public void setPrecoAtual(Float precoAtual) {
        this.precoAtual = precoAtual;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getParcelaId() {
        return parcelaId;
    }

    public void setParcelaId(Integer parcela_id) {
        this.parcelaId = parcela_id;
    }

    public Parcela getParcela() {
        return parcela;
    }

    public void setParcela(Parcela parcela) {
        this.parcela = parcela;
    }
}
