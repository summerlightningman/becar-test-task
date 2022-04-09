import React from "react";

export interface CurrencyInfo {
    code: string,
    value: number
}

export type CurrencyData = Record<string, CurrencyInfo>;

export type CurrencyCheckList = Record<string, boolean>;

export interface CurrencyListProps {
    currencyList: CurrencyData
}

export interface FooterProps {
    contentPosition?: string;
}

export interface TextProps {
    fontSize?: string;
}

export interface CurrencySelectionProps {
    currencyCheckList: CurrencyCheckList,
    setCurrencyCheckList: React.Dispatch<CurrencyCheckList>
}

