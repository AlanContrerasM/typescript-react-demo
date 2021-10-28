import React, { FC, useState } from 'react'

interface Props {
    children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>
        ) => JSX.Element | null;
}

export const Counter: FC<Props> = ({children}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            {children(count, setCount)}
        </div>
    )
}
