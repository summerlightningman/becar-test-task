import {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import CurrencyConverterPage from "./currency-converter-page";
import GlobalStyle from "./styled/global-style";

const App: FC = () => {


    return <>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<CurrencyConverterPage/>} />
            {/*<Route path="/latest" element={} />*/}
        </Routes>
    </>
};

export default App;
