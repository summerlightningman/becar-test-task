export interface CurrencyInfo {
    code: string,
    value: number
}

export type CurrencyData = Record<string, CurrencyInfo>;

export type CurrencyCheckList = Record<string, boolean>;

export interface CurrencyListProps {
    currencyList: CurrencyData
}
