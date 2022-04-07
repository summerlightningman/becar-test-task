import {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import CurrencyConverterPage from "./currency-converter-page";
import GlobalStyle from "./styled/global-style";
import AppStyled from "./styled/app.styled";

const App: FC = () => {
    

    return <>
        <GlobalStyle/>
        <AppStyled>
            <Routes>
                <Route path="/" element={<CurrencyConverterPage/>}/>
                {/*<Route path="/latest" element={} />*/}
            </Routes>
        </AppStyled>
    </>
};

export default App;
