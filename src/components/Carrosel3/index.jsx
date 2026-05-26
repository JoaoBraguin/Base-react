import { useState, useEffect } from "react";
import style from './style.module.css';

export default function Carrosel3({ titulo, videos }) {
    const [indice, setIndice] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndice((prev) => (prev + 1) % videos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [videos.length]);

    const item1 = videos[indice % videos.length];

    return (
        <div className={style.secaoCarrossel}>
            {/* Spotify */}
            <iframe
                className={style.iframe1}
                src="https://open.spotify.com/embed/track/6Z9G7ThTI9RCNAAsBW4MAy?utm_source=generator&theme=0"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify music player"
            />



            <div className={style.carrossel}>
                {/* Foto */}
                <div className={style.carrosselItens}>
                    <div className={style.item}>
                        <img src={item1.src} alt="" />
                        {(item1.title || item1.description) && (
                            <div className={style.informacaoCarrossel}>
                                <h3>{item1.title}</h3>
                                <p>{item1.description}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Texto de amor */}
                <div className={style.eu}>
                    <div className={style.dec}>
                        <h1 className={style.feliz}>SOBRE NÓS ❤</h1>
                        {/* <h2>Sobre Nós</h2> */}
                        {/* <div className={style.linha}>
                               <hr />
                            </div> */}
                        <p>Bom meu amor , primeiramente queria te agradecer por tudo até aqui! </p>
                        <p>Todos os momentos bons e até pelos ruins , pois até eles são muito importantes para a formação de um relacionamento! </p>
                        <p>Muito obrigado por todo apoio , por todo o carinho e dedicação que vc teve por nós , saiba que tudo isso é muito válido e importante para mim! </p>
                        <p>Saiba que quero viver ao seu lado pro resto de minha vida , pois sei que é vc a menina dos sonhos! </p>
                        <p>Eu te amo com a minha alma , Nós Eternamente!!</p>
                        <p>Ja ja 2 anos emm❤️❤️</p>
                        <div className={style.prasempre}>
                            <strong>29/06/2024</strong>
                            {/* <div className={style.line}>
                                <hr />
                            </div> */}
                            <strong>Pra Sempre !</strong>
                        </div>
                        <div className={style.emvolta}>
                            <h1 className={style.final}>EU TE AMO ❤</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}