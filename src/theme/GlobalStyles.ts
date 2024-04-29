import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,*::before,*::after{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Neue Montreal;
    }
    :root {
    --primary: #ffffff;
    --darkbg: #202124;
    --darkgrey: #35363a;
    --lightgrey: #494c54;
    --lightBlack: #35363a;
    --red: #ff434e;
    --yellow: #fcb808;
    --darkgray: #28292c;
    --bluish-gray: #5c616d;
    --blue: #5887ff;
    --green: #4bd37b;
}

`;
