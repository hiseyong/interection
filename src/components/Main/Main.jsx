import './main.css'
import useScrollFadeIn from '../../hooks/UseScrollFadeIn'

export function Main() {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0),
        2: useScrollFadeIn('up', 1, 0),
        3: useScrollFadeIn('up', 1, 0),
      };
    return(
        <div className="footer_defence">
            <h1 {...animatedItem[0]}>인터렉션 연습</h1>
        </div>
    )
}