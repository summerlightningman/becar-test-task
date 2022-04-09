import {ChangeEventHandler, FC, useEffect, useState} from "react";

import LatestCoursesPageStyled from "./latest-courses-page.styled";
import Header from "../styled-common/header";
import Footer from "../styled-common/footer";
import Link from "../styled-common/link.styled";
import LatestCoursesContent from "./latest-courses-content";
import CurrencySelect from "../styled-common/currency-select";
import Text from "../styled-common/text";

import CurrencyList from "./currency-list/currency-list";
import {getLatestExchangeRates} from "../../http";
import CurrencySelection from "./currency-selection/currency-selection";
import BaseCurrencyContainer from "./base-currency-container";
import {CurrencyCheckList, CurrencyData} from "../../types/currency";

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
            <BaseCurrencyContainer>
                <Text fontSize="24px">Base currency</Text>
                <CurrencySelect value={baseCurrency} onChange={changeBaseCurrency}>
                    <optgroup>
                        {Object.keys(currencyList).map(curr =>
                            <option value={curr} key={curr}>{curr}</option>)}
                    </optgroup>
                </CurrencySelect>
            </BaseCurrencyContainer>
            <CurrencyList currencyList={currList}/>
            <CurrencySelection currencyCheckList={currencyCheckList} setCurrencyCheckList={setCurrencyCheckList}/>
        </LatestCoursesContent>
        <Footer>
            <Link to="/">Go to converter</Link>
        </Footer>
    </LatestCoursesPageStyled>
}

export default LatestCoursesPage