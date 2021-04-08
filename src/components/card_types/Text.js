import { React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'

export const Text = ({name, text}) => {

    return (
        <div className="textBox">
            <p>
                {text}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus mauris viverra, viverra ante elementum, gravida risus. Mauris sit amet ullamcorper magna. Curabitur rutrum imperdiet orci, et vulputate dolor consectetur vitae. Suspendisse pharetra nisi eu dui tristique, sed sagittis nibh luctus. Donec quis hendrerit eros. Quisque at faucibus massa. Curabitur sed urna malesuada, ullamcorper lorem nec, scelerisque urna. </p>

<p>Curabitur rutrum imperdiet orci, et vulputate dolor consectetur vitae. Suspendisse pharetra nisi eu dui tristique, sed sagittis nibh luctus. Donec quis hendrerit eros. Quisque at faucibus massa.</p>

<p>Mauris sit amet ullamcorper magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


<p>www.artistwebsite.com</p>

<p>www.artistslabelwebsite.com
</p>

<p>@iorecs</p>
<p>@lowless-music</p>
<p>@solid-shape-records</p>
<p>@alexandarsound</p>

<p>Contact: mtrlaudio@gmail.com</p>
<p>Booking: booking@iorecords.org</p>
<p>Booking for Lowless: eugenie@lowless-records.com</p>

        </div>
    )
        
}