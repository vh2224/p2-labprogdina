import "./card.css";
import {useEffect, useState} from 'react';
import ImagemTeste from "../../assets/img/cards/foto.png";
import apiProdutos from './api_produto';

const Card = () => {

    const [listaDeProduto, setListaDeProduto] = useState([]);

    useEffect(()=>{
        const carregarProdutos = async () => {
            //Carregando os produtos do backend
            let lista = await apiProdutos.getProdutos();
            setListaDeProduto(lista);
        }

        carregarProdutos();
    }, []);


  return (
    <div className="produtos">
        <h1>Produtos</h1>
        <div className="main-cards">
            {listaDeProduto.map((item, key)=>(
                <div key={key} className="cards">
                    <div className="card__imagem">
                        <img src={item.imagemProduto} />
                    </div>
                    <div className="card__titulo">
                        <h1>{item.nomeProduto}</h1>
                    </div>
                    <div className="card__avaliacao">
                    <ul class="avaliacao">
                        <li class="avaliacao-item">
                        <svg
                            class="star"
                            width="15"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            class="star__path star__path--filled"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z"
                            transform="translate(0 0.648987)"
                            fill="#FF9F1C"
                            ></path>
                        </svg>
                        </li>
                        <li class="avaliacao-item">
                        <svg
                            class="star"
                            width="15"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            class="star__path star__path--filled"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z"
                            transform="translate(0 0.648987)"
                            fill="#FF9F1C"
                            ></path>
                        </svg>
                        </li>
                        <li class="avaliacao-item">
                        <svg
                            class="star"
                            width="15"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            class="star__path star__path--filled"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z"
                            transform="translate(0 0.648987)"
                            fill="#FF9F1C"
                            ></path>
                        </svg>
                        </li>
                        <li class="avaliacao-item">
                        <svg
                            class="star"
                            width="15"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            class="star__path"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z"
                            transform="translate(0 0.648987)"
                            fill="#FF9F1C"
                            ></path>
                        </svg>
                        </li>
                        <li class="avaliacao-item">
                        <svg
                            class="star"
                            width="15"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            class="star__path"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.69478 8.03684L9.21415 10L8.28021 6.3L11.3896 3.81053L7.29501 3.48947L5.69478 0L4.09454 3.48947L0 3.81053L3.10935 6.3L2.17541 10L5.69478 8.03684Z"
                            transform="translate(0 0.648987)"
                            fill="#FF9F1C"
                            ></path>
                        </svg>
                        </li>
                    </ul>
                    </div>
                    <div className="card__preco-antigo">
                        <span>de R$ {item.precoAntigo}</span>
                    </div>
                    <div className="card__preco">
                        <span>por R${item.precoAtual}</span>
                    </div>
                    <div className="card__parcelamento">
                        <span>ou em {item.parcela.qtdParcela}x de R$ {item.parcela.valorParcela}</span>
                    </div>
                    <div className="card__comprar">
                        <button className="comprar">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5784 7.61905H11.4941V4.76191H14.3677V2.85714H11.4941V0H9.5784V2.85714H6.70483V4.76191H9.5784V7.61905ZM5.74738 16.1904C4.69374 16.1904 3.84125 17.0476 3.84125 18.0952C3.84125 19.1428 4.69374 20 5.74738 20C6.80102 20 7.66309 19.1428 7.66309 18.0952C7.66309 17.0476 6.80102 16.1904 5.74738 16.1904ZM15.3257 16.1904C14.2721 16.1904 13.4196 17.0476 13.4196 18.0952C13.4196 19.1428 14.2721 20 15.3257 20C16.3794 20 17.2415 19.1428 17.2415 18.0952C17.2415 17.0476 16.3794 16.1904 15.3257 16.1904ZM5.90996 13.0952L5.9387 12.9809L6.80077 11.4285H13.9368C14.6552 11.4285 15.2874 11.0381 15.613 10.4476L19.3103 3.77141L17.6437 2.85712H17.6341L16.5805 4.76188L13.9368 9.52379H7.21264L7.08812 9.26665L4.94253 4.76188L4.03257 2.85712L3.13218 0.952362H0V2.85712H1.91571L5.36398 10.0857L4.07088 12.419C3.91762 12.6857 3.83142 13 3.83142 13.3333C3.83142 14.3809 4.69349 15.2381 5.74713 15.2381H17.2414V13.3333H6.14942C6.0249 13.3333 5.90996 13.2285 5.90996 13.0952Z" transform="translate(0.896362 0.658813)" fill="white"></path></svg>
                            <span>COMPRAR</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Card;
