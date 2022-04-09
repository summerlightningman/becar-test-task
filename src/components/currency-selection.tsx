import {ChangeEventHandler, FC, KeyboardEventHandler, useState} from "react";

import {CurrencySelectionProps} from "../types/currency-selection";

import CurrencySelectionStyled from "./styled/currency-selection.styled";
import CurrencySelectionItem from "./styled/currency-selection-item";
import ButtonsPanel from "./styled/buttons-panel";
import ControlButton from "./styled/control-button";
import InputStyled from "./styled/input.styled";

const CurrencySelection: FC<CurrencySelectionProps> = ({currencyCheckList, setCurrencyCheckList}) => {
    const [query, setQuery] = useState('');
    const checkCurrency = (name: string): ChangeEventHandler<HTMLInputElement> => e =>
        e.currentTarget.checked
            ? setCurrencyCheckList({...currencyCheckList, [name]: true})
            : setCurrencyCheckList({...currencyCheckList, [name]: false});

    const getCurrencySelectionItem = (name: string) => <CurrencySelectionItem key={name}>
        <label>{name} <input type="checkbox" checked={currencyCheckList[name]} onChange={checkCurrency(name)}/></label>
    </CurrencySelectionItem>;

    const setAllChecksTo = (value: boolean) => () => {
        const updatedCheckList = Object.keys(currencyCheckList)
            .reduce((acc, val) =>
                ({...acc, [val]: value}), {});
        setCurrencyCheckList(updatedCheckList);
    }

    const handleQueryInput: KeyboardEventHandler<HTMLInputElement> = e =>
        setQuery(e.currentTarget.value.toUpperCase());

    const currencyList = query
        ? Object.keys(currencyCheckList).filter(curr => curr.startsWith(query))
        : Object.keys(currencyCheckList);
    return <div>
        <InputStyled
            type="search"
            value={query}
            onInput={handleQueryInput}
            placeholder="Type for search currency by code..."
        />
        <ButtonsPanel>
            <ControlButton onClick={setAllChecksTo(true)}>Check all</ControlButton>
            <ControlButton onClick={setAllChecksTo(false)}>Uncheck all</ControlButton>
        </ButtonsPanel>
        <CurrencySelectionStyled>
            {currencyList.map(getCurrencySelectionItem)}
        </CurrencySelectionStyled>
    </div>
}

export default CurrencySelection