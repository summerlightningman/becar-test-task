import React from "react";
import {CurrencyCheckList} from "./currency";

export interface CurrencySelectionProps {
    currencyCheckList: CurrencyCheckList,
    setCurrencyCheckList: React.Dispatch<CurrencyCheckList>
}

