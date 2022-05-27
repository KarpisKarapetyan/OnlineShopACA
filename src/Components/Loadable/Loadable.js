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

    console.log(src);
    return (
        <div ref={containerRef} className={classNames(classes.container, {
            [classes.container_loaded]: isLoaded
        })}>
            {
                (isIntersecting || isLoaded) && <img
                    className={classNames(classes.manTshirt, {
                        [classes.manTshirt_loaded]: isLoaded
                    })}
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a4/5b/a2/l-image-art-hotel.jpg?w=900&h=-1&s=1"
                    ref={imageRef}
                />
            }
        </div>
    )
}

export default Loadable
