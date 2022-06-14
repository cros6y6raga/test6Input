import React from 'react';
import {FiltereType} from "./App";

type NewComponentType = {
    money: Array<MoneyType>
    onClickFilterHandler: (filter: FiltereType) => void
}
type MoneyType = {
    banknots:string,
    nominal: number,
    number: string,
}

export const NewComponent = (props:NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Rubl')}>Rubl</button>
                <button onClick={() => props.onClickFilterHandler('Dollar')}>Dollar</button>
            </div>
        </>
    );
};