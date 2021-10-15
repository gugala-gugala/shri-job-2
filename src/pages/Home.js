import {
    Link,
} from "react-router-dom";
import {ReactComponent as ReactLogo} from '../icons/settings.svg';
import Button from '../components/Button';

export function Home() {
    return (
        <div>
        <div className='text-main text-center' style={{width: '260px', display: 'inline-block'}}>
            <ReactLogo/>
            <div style={{marginTop: '32px', marginBottom: '24px'}}>Configure repository connection and synchronization settings</div>
            <Link to="/settings">
                <Button className="button-action">Open settings</Button>
            </Link>
            </div>
        </div>);
}