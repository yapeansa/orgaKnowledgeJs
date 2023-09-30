import './Rodape.css';

const Rodape = () => {

    const redesSociais = [
        {
            endereco: 'https://facebook.com/orgaknowledge',
            imagem: 'imagens/facebook.svg',
            texto: 'Organo Facebook'
        },
        {
            endereco: 'https://twitter.com/orgaknowledge',
            imagem: 'imagens/twitter.svg',
            texto: 'Organo twitter'
        },
        {
            endereco: 'https://instagram.com/orgaknowledge',
            imagem: 'imagens/instagram.svg',
            texto: 'Organo instagram'
        }
    ];

    return (
        <footer className="footer">
            <div>
                <ul className="redes-sociais">
                    {redesSociais.map(rede => <li key="rede.texto">
                        <a href={rede.endereco}><img src={rede.imagem} alt={rede.texto} /></a>
                    </li>)}
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
