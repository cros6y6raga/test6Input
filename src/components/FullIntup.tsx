import React, {ChangeEvent, useState} from 'react';
type FullInputPropsType = {
    addMessage: (title:string)=> void
}
export const FullIntup = (props:FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeIntupHandler = (event: ChangeEvent<HTMLInputElement>) => {

        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler=()=>{
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeIntupHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
