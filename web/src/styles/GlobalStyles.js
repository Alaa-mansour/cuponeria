import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, p{
        margin: 0;
        padding: 0;
        box-sizing : border-box;
    }
    html, body, #root{
        height: 100%;
        background: var(--seconday-gray);
    }
    *, button, input{
        border: 0;
    }

    :root {
        --primary: rgb(241,243,245);
        --white: #fff;

        --light-gray: #D3D3D3;
        --seconday-gray: rgb(227,228,230);
        --text-gray: rgb(83,85,88);

        --yellow: #ffc107;
        --light-blue: rgb(122, 175, 206);
    }

`;
