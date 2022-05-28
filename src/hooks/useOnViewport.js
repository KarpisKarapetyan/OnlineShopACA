import {useEffect, useState} from "react";

export const useOnViewport = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        }, {
            threshold: 0.2
        })

        if(ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref])

    return isIntersecting
}