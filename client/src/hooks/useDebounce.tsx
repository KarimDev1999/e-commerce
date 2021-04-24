import React, { useRef, useCallback } from 'react'

const useDebounce = (cb: Function, delay: number) => {
    const timer: React.MutableRefObject<any> = useRef();

    const debouncedCallback = useCallback(
        (value: string) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => cb(value), delay)
        },
        [cb, delay]
    )

    return debouncedCallback

}

export default useDebounce
