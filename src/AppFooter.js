import './AppFooter.css';
const myName = 'Username Usernamov';

export const AppFooter = () => {
    return (<footer>
        <span style={{display: 'flex'}}>
            <a href="/" className="p-1 text-13">Support</a>
            <a href="/" className="p-1 text-13">Learning</a>
            <a href="/" className="p-1 text-13">Русская версия</a>
        </span>
        <span style={{display: 'flex'}} className="cr-xl">
            <span className="p-1 text-13">© 2021 {myName}</span>
        </span>
    </footer>);
}
