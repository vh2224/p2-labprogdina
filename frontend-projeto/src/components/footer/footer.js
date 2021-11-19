import "./footer.css";
import Profit from '../../assets/img/footer/profitsvg.svg';
import Vtex from '../../assets/img/footer/vtex.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="conteudo-footer">
        <h1>Localização</h1>
        <div className="conteudo">
          <div className="endereco">
            <div className="endereco-sp">
              <span className="sp">São Paulo</span>
              <span>Rua do Rócio, 423/1801</span>
              <span>Vila Olímpia - SP</span>
              <span>04552-000</span>
              <span>+55 11 3333 3333</span>
            </div>
            <div className="endereco-rj">
              <span className="rj">Rio de Janeiro</span>
              <span>Vol. da Pátria, 301/702</span>
              <span>Botafogo - RJ</span>
              <span>22270-000</span>
              <span>+55 21 3333 3333</span>
            </div>
          </div>
          <div className="contato">
            <div className="email">
              <button>
                <div className="svg-contato">
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4286 0H1.71429C0.771429 0 0.00857143 0.77208 0.00857143 1.71573L0 12.0101C0 12.9538 0.771429 13.7259 1.71429 13.7259H15.4286C16.3714 13.7259 17.1429 12.9538 17.1429 12.0101V1.71573C17.1429 0.77208 16.3714 0 15.4286 0ZM15.4286 3.43149L8.57144 7.72082L1.71429 3.43149V1.71576L8.57144 6.00509L15.4286 1.71576V3.43149Z"
                      transform="translate(0.285706 0.868011)"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <span>Entre em contato</span>
              </button>
            </div>
            <div className="fale-conosco">
              <button>
                <div class="svg-contato">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.71429 0C3.45429 0 0 3.4572 0 7.7208V13.7259C0 15.1499 1.14857 16.2995 2.57143 16.2995H5.14286V9.43653H1.71429V7.7208C1.71429 4.40086 4.39714 1.71573 7.71429 1.71573C11.0314 1.71573 13.7143 4.40086 13.7143 7.7208V9.43653H10.2857V16.2995H13.7143V17.1573H7.71429V18.8731H12.8571C14.28 18.8731 15.4286 17.7235 15.4286 16.2995V7.7208C15.4286 3.4572 11.9743 0 7.71429 0Z"
                      transform="translate(0.857117 0.295761)"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <span>
                  Fale com o nosso consultor online
                </span>
              </button>
            </div>
          </div>
          <div className="credito">
              <img src={Profit}/>
              <img src={Vtex}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
