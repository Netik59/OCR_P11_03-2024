import ErrorIllustration from '../../img/404.webp'
import { Link } from 'react-router-dom'


export const Error = () => {
    return (
        <div className="error displayFlex-alignCenter">
            <img src={ErrorIllustration} alt="Erreur 404" />
            <h1 className="error__txt">
                Oups! La page que vous demandez n'existe pas.
            </h1>
            <Link className={`styledLink backToHome`} to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

