import {ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useState} from "react";
import CurrencyConverterPageStyled from "./styled/currency-converter-page.styled";
import Header from "./styled/header";
import {getLatestExchangeRates} from "../http";
import {CurrencyData} from "../types";
import CurrencyConverterContent from "./styled/currency-converter-content";
import {MdOutlineDoubleArrow} from "react-icons/md";
import FormInput from "./styled/form-input";
import CurrencySelect from "./styled/currency-select";
import Text from "./styled/text";
import Footer from "./styled/footer";
import Link from "./styled/link.styled"

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