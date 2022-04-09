import {ChangeEventHandler, FC} from "react";
import CurrencySelectionStyled from "./styled/currency-selection.styled";
import CurrencySelectionItem from "./styled/currency-selection-item";
import {CurrencySelectionProps} from "../types";
import ButtonsPanel from "./styled/buttons-panel";
import ControlButton from "./styled/control-button";

const CurrencySelection: FC<CurrencySelectionProps> = ({currencyCheckList, setCurrencyCheckList}) => {
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

    return <div>
        <ButtonsPanel>
            <ControlButton onClick={setAllChecksTo(true)}>Check all</ControlButton>
            <ControlButton onClick={setAllChecksTo(false)}>Uncheck all</ControlButton>
        </ButtonsPanel>
        <CurrencySelectionStyled>
            {Object.keys(currencyCheckList).map(getCurrencySelectionItem)}
        </CurrencySelectionStyled>
    </div>
}

export default CurrencySelection