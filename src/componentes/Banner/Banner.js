import './Banner.css';

export const Banner = () => {
    return (
        <header className="banner">
            <div className="left">
                <a href="https://orgaknowledge.vercel.app/"><img src="imagens/Logo.svg" alt="Logo da Organo" /></a>
                <h2>As Maiores Mentes</h2>
                <p>reunidas em um só lugar!</p>
            </div>
            <div className="right">
                <img src="imagens/img_header.jpg" alt="Destaque" />
            </div>
        </header>
    );
}
