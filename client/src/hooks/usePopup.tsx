import React, { useState, useEffect, useRef } from 'react'

const usePopup = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const ref: any = useRef(null);

    useEffect(() => {
        const handelOutsideClick = (e: any) => {
            if (!e.path.includes(ref.current)) {
                setVisible(false)
            }
        }
        if (visible) {
            window.addEventListener('click', (e) => handelOutsideClick(e))
        }
        return () => {
            window.removeEventListener('click', handelOutsideClick)
        }
    }, [visible])
    return { setVisible, visible, ref }
}

export default usePopup
