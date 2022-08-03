import './footer.css'

export function Footer() {
    return(
        <footer>
            <nav className='footerbtn'>
                <a href='https://www.instagram.com/s.zen_07/' target='_blank'>Instagram</a>|
                <a href='https://github.com/hiseyong' target='_blank'>Github</a>
            </nav>
            <p>
                <span>dev: hiseyong</span>
                <br/>
                <span>email: hiseyong1008@gmail.com</span>
                <br/>
                <span>Copyright 2022. hiseyong. All Rights Reserved.</span>
            </p>
        </footer>
    )
}