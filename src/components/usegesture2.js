import { useGesture } from "react-use-gesture"
import { useRef, useState } from "react"

export default function UseGesture(){
    return (
        <div style={{width: "100%"}}>
            <p>Image cropper</p>
            <div>
                <ImageCropper src="https://miro.medium.com/max/700/1*ve_Hmn3RqBAwjk_tCudAww.jpeg"/>
            </div>
        </div>
    )
}

function ImageCropper({src}){
    let [crop, setCrop] = useState({ x: 0, y: 0})
    let imageRef = useRef();
    useGesture({
        onDrag: ({ offset: [dx, dy] }) => {
            setCrop({x: dx, y: dy})
            console.log(dx)
        },
    }, {
        domTarget: imageRef
    });
    return(
        <>
            <div className="test" style={{overflow: "hidden"}}> 
                <img 
                className="image" 
                src={src} 
                ref={imageRef}
                style={{
                    left: crop.x,
                    top: crop.y,
                    width: "auto",
                    position: "absolute"
                }}
                />
            </div>
        </>
    )
}