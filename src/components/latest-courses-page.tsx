import {ChangeEventHandler, FC, useEffect, useState} from "react";

import LatestCoursesPageStyled from "./styled/latest-courses-page.styled";
import Header from "./styled/header";
import Footer from "./styled/footer";
import Link from "./styled/link.styled";
import LatestCoursesContent from "./styled/latest-courses-content";
import CurrencySelect from "./styled/currency-select";
import Text from "./styled/text";
import CurrencySelection from "./currency-selection";
import {CurrencyCheckList, CurrencyData} from "../types";
import CurrencyList from "./currency-list";
import {getLatestExchangeRates} from "../http";

const LatestCoursesPage: FC = () => {
    const [currencyCheckList, setCurrencyCheckList] = useState<CurrencyCheckList>({});
    const [baseCurrency, setBaseCurrency] = useState<string>('RUB');
    const [currencyList, setCurrencyList] = useState<CurrencyData>({});
    useEffect(() => {
        getLatestExchangeRates(baseCurrency)
            .then(data => {
                if (!data)
                    return
                setCurrencyList(data);

                setCurrencyCheckList(
                    Object.keys(data).reduce((acc, val) => ({...acc, [val]: !!currencyCheckList[val]}), {})
                );
            })
    }, [baseCurrency]);

    const changeBaseCurrency: ChangeEventHandler<HTMLSelectElement> = e =>
        setBaseCurrency(e.currentTarget.value);

    const currList = Object.keys(currencyList)
        .filter(curr => currencyCheckList[curr])
        .reduce((acc, val) => ({...acc, [val]: currencyList[val]}), {});
    return <LatestCoursesPageStyled>
        <Header>Actual currency courses</Header>
        <LatestCoursesContent>
            <div>
                <Text>Base currency</Text>
                <CurrencySelect value={baseCurrency} onChange={changeBaseCurrency}>
                    <optgroup>
                        {Object.keys(currencyList).map(curr =>
                            <option value={curr} key={curr}>{curr}</option>)}
                    </optgroup>
                </CurrencySelect>
            </div>
            <CurrencySelection currencyCheckList={currencyCheckList} setCurrencyCheckList={setCurrencyCheckList}/>
            <CurrencyList currencyList={currList}/>
        </LatestCoursesContent>
        <Footer>
            <Link to="/">Go to converter</Link>
        </Footer>
    </LatestCoursesPageStyled>
}

export default LatestCoursesPage