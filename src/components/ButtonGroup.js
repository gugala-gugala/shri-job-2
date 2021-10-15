import {
    useLocation
} from "react-router-dom";
import { useHistory } from 'react-router';

import {ReactComponent as RunLogo} from '../icons/12_play.svg';
import {ReactComponent as CogLogo} from '../icons/12_settings.svg';
import {Button} from './Button'

export default function ButtonGroup({modal, small, settings}) {
    const location = useLocation().pathname;
    const history = useHistory();
    let buttons = [];
    console.log(settings)
    if (settings) {
        buttons.push(<Button key='1' onClick={modal} size='small'><span className="top-button-icon"><RunLogo/></span> <span className="top-button-label">Run build</span></Button>)
    }
    if (location !== '/settings') {
        const text = location === '/' ? 'Settings' : null;
        buttons.push(<Button key='0' onClick={()=>{history.push('/settings')}} size='small'>
            <span className="top-button-icon"><CogLogo/></span>
            {text && <span className="top-button-label">{text}</span>}</Button>)
    }
    return (<div className="top-button-group" style={{gap: small ? '8px': '12px' }}>{buttons}</div>);
}