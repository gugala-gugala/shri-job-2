import { Link, useLocation } from "react-router-dom";
import {useState} from "react";

import ReactModal from 'react-modal';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import CleanableInput from './components/CleanableInput';
import ButtonContainer from "./components/ButtonContainer";

function AsLogo({settings, logo}) {
    let asLogo;
    if (settings && !logo) {
        // philip1967/my-aw esome-repo-with-long-long-long-repo-name
        asLogo = <h2 className="text-main" style={{flex:1, lineHeight: '30px', fontSize: '24px'}}>{settings.repo}</h2>;
    } else {
        asLogo = <div className="logo" style={{flex:1}}><Link to="/">School CI server</Link></div>;
    }
    return asLogo;
}

export const AppHeader = ({settings}) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation().pathname;
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <ReactModal 
                isOpen={isOpen}
                ariaHideApp={false}
                shouldCloseOnEsc={true}
                onRequestClose={closeModal}
                contentLabel="Minimal Modal Example"
                style={{
                    overlay: {
                    backgroundColor: 'rgba(0,0,0,0.4)'
                    },
                    content: {
                        padding: '20px',
                        maxWidth: '485px',
                        backgroundColor: '#fff',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
                >
                <h2 className="text-main" style={{fontSize:'18px', lineHeight: '22px'}}>New build</h2>
                <div className="text-main" style={{marginTop: '12px'}}>Enter the commit hash which you want to build.</div>
                <div className="ptb-1" style={{marginTop: '12px'}}>
                    <CleanableInput name="run" inputClassName="text-15 input-field" placeholder="Commit hash" style={{width: '100%'}}/>
                </div>
                <ButtonContainer>
                    <Button key='action' onClick={closeModal} className='button-action w-100-xl'>Run build</Button>
                    <Button key='noaction' onClick={closeModal} className="button-control w-100-xl">Cancel</Button>
                </ButtonContainer>
            </ReactModal>
            <header>
                <AsLogo settings={settings} logo={location === '/settings'}/>
                <ButtonGroup modal={() => setIsOpen(true)} small={true} settings={settings} logo={location === '/settings'}/>
            </header>
        </>);
}