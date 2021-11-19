import './Header.css';
import Logo from '../../assets/img/header/logo.svg';
import iconConta from '../../assets/img/header/Icon.svg';
import iconCarrinho from '../../assets/img/header/carrinho.svg';
import Brasil from '../../assets/img/header/BR.svg';
import Espanha from '../../assets/img/header/ES.svg';
import ReinoUnido from '../../assets/img/header/GB.svg';

const Header = () => {
    return (
        <header>
            <div className="header__content">
                <div className="header__logo">
                    <img src={Logo}/>
                </div>
                <form className="buscar">
                    <input class="buscar__input" type="text" placeholder="O que está procurando?"/>
                </form>
                <div className="conta">
                    <button className="acessar-conta">
                        <div className="imagem-conta">
                            <img src={iconConta}/>
                        </div>
                        <span>Minha Conta</span>
                    </button>
                </div>
                <div className="conteudo-carrinho">
                    <button className="carrinho">
                        <div className="icon-carrinho">
                            <img src={iconCarrinho}/>
                        </div>
                        <span className="quantidade-carrinho">
                            7
                        </span>
                    </button>
                </div>
                <div className="selecionar-idioma">
                    <div className="idiomas">
                        <a href="#" title="PT-BR"><img src={Brasil}/></a>
                        <a href="#" title="ES"><img src={Espanha}/></a>
                        <a href="#" title="EN"><img src={ReinoUnido}/></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;