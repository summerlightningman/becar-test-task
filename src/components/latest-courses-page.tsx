import {FC, useState} from "react";

import LatestCoursesPageStyled from "./styled/latest-courses-page.styled";
import Header from "./styled/header";
import Footer from "./styled/footer";
import Link from "./styled/link.styled";
import LatestCoursesContent from "./styled/latest-courses-content";
import CurrencySelect from "./styled/currency-select";
import Text from "./styled/text";
import CurrencySelection from "./currency-selection";
import {CurrencyCheckList} from "../types";

const LatestCoursesPage: FC = () => {
    const [currencyCheckList, setCurrencyCheckList] = useState<CurrencyCheckList>({USD: true, JPY: false, UAH: true, RUB: true, RUR: false});

    return <LatestCoursesPageStyled>
        <Header>Actual currency courses</Header>
        <LatestCoursesContent>
            <div>
                <Text>Base currency</Text>
                <CurrencySelect >
                    <optgroup>

                    </optgroup>
                </CurrencySelect>
            </div>
            <CurrencySelection currencyCheckList={currencyCheckList} setCurrencyCheckList={setCurrencyCheckList}/>
        </LatestCoursesContent>
        <Footer>
            <Link to="/">Go to converter</Link>
        </Footer>
    </LatestCoursesPageStyled>
}

export default LatestCoursesPage