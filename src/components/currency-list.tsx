import {FC} from "react";

import {CurrencyListProps} from "../types/currency";

import CurrencyListStyled from "./styled/currency-list.styled";
import CurrencyListItem from "./styled/currency-list-item";
import Text from "./styled/text";

const CurrencyList: FC<CurrencyListProps> = ({currencyList}) => {
    const getCurrencyListItem = (currency: string, price: number) =>
        <CurrencyListItem key={currency + ' ' + price}>
            <Text fontSize="24px">{currency}</Text><Text fontSize="24px">{price}</Text>
        </CurrencyListItem>;


    return <CurrencyListStyled>
        {
            Object.entries(currencyList).map(
                ([, {code, value}]) => getCurrencyListItem(code, value)
            )
        }
    </CurrencyListStyled>
}

export default CurrencyList