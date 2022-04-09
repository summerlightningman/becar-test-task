import {ChangeEventHandler, FC, useState} from "react";

import LatestCoursesPageStyled from "./styled/latest-courses-page.styled";
import Header from "./styled/header";
import Footer from "./styled/footer";
import Link from "./styled/link.styled";
import LatestCoursesContent from "./styled/latest-courses-content";
import CurrencySelect from "./styled/currency-select";
import Text from "./styled/text";
import CurrencySelection from "./currency-selection";
import {CurrencyCheckList} from "../types";
import CurrencyList from "./currency-list";

const LatestCoursesPage: FC = () => {
    const [currencyCheckList, setCurrencyCheckList] = useState<CurrencyCheckList>({});
    const [baseCurrency, setBaseCurrency] = useState<string>('RUB');
    // useEffect()

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
            <CurrencyList/>
        </LatestCoursesContent>
        <Footer>
            <Link to="/">Go to converter</Link>
        </Footer>
    </LatestCoursesPageStyled>
}

export default LatestCoursesPage