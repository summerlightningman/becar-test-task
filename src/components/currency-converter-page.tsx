import {ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useState} from "react";
import CurrencyConverterPageStyled from "./styled/currency-converter-page.styled";
import Header from "./styled/header";
import {getLatestExchangeRates} from "../http";
import {CurrencyData} from "../types";
import CurrencyConverterContent from "./styled/currency-converter-content";
import {MdOutlineDoubleArrow} from "react-icons/md";
import FormInput from "./styled/form-input";
import CurrencySelection from "./styled/currency-selection";
import Text from "./styled/text";
import Footer from "./styled/footer";

const CurrencyConverterPage: FC = () => {
    const [currencyFrom, setCurrencyFrom] = useState<string>('RUB');
    const [currencyTo, setCurrencyTo] = useState<string>('USD');
    const [amount, setAmount] = useState<string>('1');
    const [currencyList, setCurrencyList] = useState<string[]>([]);
    const [currencyData, setCurrencyData] = useState<CurrencyData>({});

    useEffect(() => {
        getLatestExchangeRates(currencyFrom)
            .then(data => {
                setCurrencyList(Object.keys(data));
                setCurrencyData(data);
            });
    }, [currencyFrom]);

    const result = currencyData[currencyTo]?.value * +amount;

    const changeCurrencyFrom: ChangeEventHandler<HTMLSelectElement> = e => setCurrencyFrom(e.currentTarget.value);
    const changeCurrencyTo: ChangeEventHandler<HTMLSelectElement> = e => setCurrencyTo(e.currentTarget.value);
    const handleAmountInput: KeyboardEventHandler<HTMLInputElement> = e => setAmount(e.currentTarget.value);

    return <CurrencyConverterPageStyled>
        <Header>Convert</Header>
        <CurrencyConverterContent>
            <FormInput type="number" onInput={handleAmountInput} value={+amount} min={1}/>
            <CurrencySelection onChange={changeCurrencyFrom}>
                {currencyList.map(curr =>
                    <option value={curr} key={curr} selected={curr === currencyFrom}>{curr}</option>)}
            </CurrencySelection>
            <CurrencySelection onChange={changeCurrencyTo}>
                {currencyList.map(curr =>
                    <option value={curr} key={curr} selected={curr === currencyTo}>{curr}</option>)}
            </CurrencySelection>
            <MdOutlineDoubleArrow size="60px"/>
            <Text>{result}</Text>
        </CurrencyConverterContent>
        <Footer>

        </Footer>
    </CurrencyConverterPageStyled>
};

export default CurrencyConverterPage