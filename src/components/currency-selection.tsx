import {ChangeEventHandler, FC} from "react";
import CurrencySelectionStyled from "./styled/currency-selection.styled";
import CurrencySelectionItem from "./styled/currency-selection-item";
import {CurrencySelectionProps} from "../types";

const CurrencySelection: FC<CurrencySelectionProps> = ({currencyCheckList, setCurrencyCheckList}) => {
    const checkCurrency = (name: string): ChangeEventHandler<HTMLInputElement> => e =>
        e.currentTarget.checked
            ? setCurrencyCheckList({...currencyCheckList, [name]: true})
            : setCurrencyCheckList({...currencyCheckList, [name]: false});

    const getCurrencySelectionItem = (name: string) => <CurrencySelectionItem>
        <label>{name} <input type="checkbox" checked={currencyCheckList[name]} onChange={checkCurrency(name)}/></label>
    </CurrencySelectionItem>;

    return <CurrencySelectionStyled>
        {Object.keys(currencyCheckList).map(getCurrencySelectionItem)}
    </CurrencySelectionStyled>
}

export default CurrencySelection