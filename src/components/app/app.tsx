import {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import CurrencyConverterPage from "../currency-converter-page/currency-converter-page";
import GlobalStyle from "../styled-common/global-style";
import AppStyled from "./app.styled";
import LatestCoursesPage from "../latest-courses-page/latest-courses-page";

const App: FC = () => {
    

    return <>
        <GlobalStyle/>
        <AppStyled>
            <Routes>
                <Route path="/" element={<CurrencyConverterPage/>}/>
                <Route path="/latest" element={<LatestCoursesPage/>} />
            </Routes>
        </AppStyled>
    </>
};

export default App;
