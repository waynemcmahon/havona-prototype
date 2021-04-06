import { React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'

export const Text = ({name, text}) => {

    return (
        <div>
            <p>
                {text}
            </p> 
        </div>
    )
        
}