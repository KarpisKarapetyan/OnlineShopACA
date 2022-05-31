import classes from "./Loadable.module.css";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import { useOnViewport } from "../../hooks/useOnViewport";

const Loadable = ({src}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    const isIntersecting = useOnViewport(containerRef)

    useEffect(() => {
        if(!isIntersecting || isLoaded) return
        if(imageRef.current) {
            imageRef.current.onload = () => setIsLoaded(true)
        }
    }, [isIntersecting, isLoaded])

    return (
        <div ref={containerRef} className={classNames(classes.container, {
            [classes.container_loaded]: isLoaded
        })}>
            {
                (isIntersecting || isLoaded) && <img
                    className={classNames(classes.manTshirt, {
                        [classes.manTshirt_loaded]: isLoaded
                    })}
                    src={src}
                    ref={imageRef}
                />
            }
        </div>
    )
}

export default Loadable
