import youngnam from '../../img/youngnam.jpeg'
import ocktaek from '../../img/ocktaek.jpg'
import joonseok from '../../img/joonseok.jpg'
import yumdda from '../../img/yumdda.jpg'
import useScrollFadeIn from '../../hooks/UseScrollFadeIn'
import './Img.css'

export function Img() {
    
    return(
        <div className="footer_defence">
            <img src={youngnam} {...useScrollFadeIn('up', 1, 0)}/>
            <hr/>
            <img src={ocktaek} {...useScrollFadeIn('up', 1, 0)}/>
            <hr/>
            <img src={joonseok} {...useScrollFadeIn('up', 1, 0)}/>
            <hr/>
            <img src={yumdda} {...useScrollFadeIn('up', 1, 0)}/>
        </div>
    )
}