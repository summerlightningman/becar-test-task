import React, {FC} from 'react';
import CurrencyConverterPage from "./currency-converter-page";
import GlobalStyle from "./styled/global-style";

const App: FC = () => {


    return <>
        <GlobalStyle/>
        <CurrencyConverterPage/>
    </>
};

export default App;
