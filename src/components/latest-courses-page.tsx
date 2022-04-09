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
        const currencies: string[] = Object.keys(currencyCheckList).filter(key => currencyCheckList[key]);
        getLatestExchangeRates(baseCurrency, currencies)
            .then(data => {
                if (!data)
                    return
                setCurrencyList(data);
                if (!Object.keys(currencyCheckList))
                    setCurrencyCheckList(Object.keys(data).reduce((acc, val) => ({...acc, [val]: false}), {}));
            })
    }, [baseCurrency]);

    const changeBaseCurrency: ChangeEventHandler<HTMLSelectElement> = e =>
        setBaseCurrency(e.currentTarget.value);

    return <LatestCoursesPageStyled>
        <Header>Actual currency courses</Header>
        <LatestCoursesContent>
            <div>
                <Text>Base currency</Text>
                <CurrencySelect value={baseCurrency} onChange={changeBaseCurrency}>
                    <optgroup>
                        {Object.keys(currencyCheckList).map(curr =>
                            <option value={curr} key={curr}>{curr}</option>)}
                    </optgroup>
                </CurrencySelect>
            </div>
            <CurrencySelection currencyCheckList={currencyCheckList} setCurrencyCheckList={setCurrencyCheckList}/>
            <CurrencyList currencyList={currencyList}/>
        </LatestCoursesContent>
        <Footer>
            <Link to="/">Go to converter</Link>
        </Footer>
    </LatestCoursesPageStyled>
}

export default LatestCoursesPage