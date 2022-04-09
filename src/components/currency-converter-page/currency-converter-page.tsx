import {ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useState} from "react";
import {MdOutlineDoubleArrow} from "react-icons/md";

import {getLatestExchangeRates} from "../../http";

import CurrencyConverterPageStyled from "./currency-converter-page.styled";
import {CurrencyData} from "../../types/currency";
import Header from "../styled-common/header";
import CurrencyConverterContent from "./currency-converter-content";
import FormInput from "../styled-common/form-input";
import CurrencySelect from "../styled-common/currency-select";
import Text from "../styled-common/text";
import Footer from "../styled-common/footer";
import Link from "../styled-common/link.styled"

const CurrencyConverterPage: FC = () => {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo, setCurrencyTo] = useState<string>('RUB');
    const [amount, setAmount] = useState<string>('1');
    const [currencyList, setCurrencyList] = useState<string[]>([]);
    const [currencyData, setCurrencyData] = useState<CurrencyData>({});

    useEffect(() => {
        getLatestExchangeRates(currencyFrom)
            .then(data => {
                if (!data)
                    return
                setCurrencyList(Object.keys(data));
                setCurrencyData(data);
            });
    }, [currencyFrom]);

    const result = (currencyData[currencyTo]?.value * +amount).toFixed(4) || 0;

    const changeCurrencyFrom: ChangeEventHandler<HTMLSelectElement> = e => setCurrencyFrom(e.currentTarget.value);
    const changeCurrencyTo: ChangeEventHandler<HTMLSelectElement> = e => setCurrencyTo(e.currentTarget.value);
    const handleAmountInput: KeyboardEventHandler<HTMLInputElement> = e => setAmount(e.currentTarget.value);

    return <CurrencyConverterPageStyled>
        <Header>Convert</Header>
        <CurrencyConverterContent>
            <FormInput type="number" onInput={handleAmountInput} value={+amount} min={1}/>
            <CurrencySelect onChange={changeCurrencyFrom} value={currencyFrom} style={{borderRadius: '5px 0 0 5px'}}>
                <optgroup>
                    {currencyList.map(curr =>
                        <option value={curr} key={curr}>{curr}</option>)}
                </optgroup>
            </CurrencySelect>
            <CurrencySelect onChange={changeCurrencyTo} value={currencyTo} style={{borderRadius: '0 5px 5px 0'}}>
                <optgroup>
                    {currencyList.map(curr =>
                        <option value={curr} key={curr}>{curr}</option>)}
                </optgroup>
            </CurrencySelect>
            <MdOutlineDoubleArrow size="60px"/>
            <Text>{result}</Text>
        </CurrencyConverterContent>
        <Footer contentPosition="right">
            <Link to="/latest">Go to list</Link>
        </Footer>
    </CurrencyConverterPageStyled>
};

export default CurrencyConverterPage