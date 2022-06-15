import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundScreen = () => {
    return (
        <div>
            <h3>Pagina nao encontrada</h3>
            <Link to={'/'}>Voltar</Link>
        </div>
    )
};
 
export default NotFoundScreen;
