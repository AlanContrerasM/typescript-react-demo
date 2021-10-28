import React, { FC, useState, useRef } from 'react'




//we can either
// const TextField: FC<{text: string }> = ()...
//0r declare an interface, interface preferred
interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: () => void;
    fn2?: () => number;
    obj?: {
        f1: string;
        x: number;
    };
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    //we get these types by hovering over what we wanna add. here we are hovering on onChange
    person: Person;
}

const TextField: FC<Props> = (props) => {

    const [count, setCount] = useState<number | Person | null | undefined | {text: string}>({text:"hey"});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <h3>{props.text}</h3>
            <input ref={inputRef} onChange={props.handleChange}/>
        </div>
    )
}



export default TextField


