import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="footer">
            <div>
                <ul className="redes-sociais">
                    <li><a href="https://facebook.com"><img src="imagens/facebook.svg" alt="Facebook Organo" /></a></li>
                    <li><a href="https://twitter.com"><img src="imagens/twitter.svg" alt="Twitter Organo" /></a></li>
                    <li><a href="https://instagram.com"><img src="imagens/instagram.svg" alt="Instagram Organo" /></a></li>
                </ul>
            </div>
            <div>
                <img src="imagens/Logo.svg" alt="Logo Organo" />
            </div>
            <div>
                <p>Desenvolvido por Yago.</p>
            </div>
        </footer>
    );
};

export default Rodape;
