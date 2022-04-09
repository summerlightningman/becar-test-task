import {FC} from "react";
import {CurrencyListProps} from "../types";
import CurrencyListStyled from "./styled/currency-list.styled";
import CurrencyListItem from "./styled/currency-list-item";
import Text from "./styled/text";

const CurrencyList: FC<CurrencyListProps> = ({currencyList}) => {
    const getCurrencyListItem = (currency: string, price: number) => <CurrencyListItem key={currency + ' ' + price}>
        <Text>{currency}</Text><Text>{price}</Text>
    </CurrencyListItem>

    return <CurrencyListStyled>
        {
            Object.entries(currencyList).map(
                ([, {code, value}]) => getCurrencyListItem(code, value)
            )
        }
    </CurrencyListStyled>
}

export default CurrencyList