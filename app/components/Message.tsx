import { useState, useEffect, ReactNode } from 'react'

interface MessageProps {
    variant: string;
    children: ReactNode;
}

const Message = ({ variant, children }: MessageProps) => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, 5000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    if (!show) {
        return null;
    }

    return (
        <div className={`alert alert-${variant}`}>
            {children}
        </div>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message;
