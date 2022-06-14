import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FiltereType = 'All' | 'Dollar' | 'Rubl'
function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollar', nominal: 100, number: ' a1234567890'},
        {banknots: 'Dollar', nominal: 50, number: ' z1234567890'},
        {banknots: 'Rubl', nominal: 100, number: ' w1234567890'},
        {banknots: 'Dollar', nominal: 100, number: ' e1234567890'},
        {banknots: 'Dollar', nominal: 50, number: ' c1234567890'},
        {banknots: 'Rubl', nominal: 100, number: ' r1234567890'},
        {banknots: 'Dollar', nominal: 50, number: ' x1234567890'},
        {banknots: 'Rubl', nominal: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FiltereType>('All')
    let currentMoney = money;
    if (filter==='Dollar'){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollar');
    }
    if (filter==='Rubl'){
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Rubl');
    }
    const onClickFilterHandler = (nameButton: FiltereType) => {
        setFilter(nameButton)
    }
    return (
        <>
            <NewComponent money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>
    );
};

export default App;
