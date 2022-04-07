export interface CurrencyInfo {
    code: string,
    value: number
}

export type CurrencyData = Record<string, CurrencyInfo>;