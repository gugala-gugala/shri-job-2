import './App.css';
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import ReactModal from 'react-modal';
import {ReactComponent as ReactLogo} from './icons/settings.svg';
import {ReactComponent as CogLogo} from './icons/12_settings.svg';
import {ReactComponent as BuildWaitLogo} from './icons/clock_24.svg';
import {ReactComponent as BuildDoneLogo} from './icons/done_24.svg';
import {ReactComponent as BuildErrorLogo} from './icons/fail_24.svg';
import {ReactComponent as ClockLogo} from './icons/16_stopwatch.svg';
import {ReactComponent as CommitLogo} from './icons/16_code-commit.svg';
import {ReactComponent as UserLogo} from './icons/16_user.svg';
import {ReactComponent as CalendarLogo} from './icons/16_calendar.svg';
import {ReactComponent as ClearLogo} from './icons/clear.svg';
import {ReactComponent as RunLogo} from './icons/12_play.svg';

// Modal.setAppElement('modal');

function IconButton({text, icon, shadow, onClick}) {
    const shadowClass = shadow ? 'shadow' : '';
    return (
        <button onClick={onClick} className={"top-button " + shadowClass} style={{marginLeft: '8px'}}>
            <span className="top-button-icon">{icon()}</span>
            {text && <span className="top-button-label">{text}</span>}
        </button>);
}

function Button({text, type, className, onClick}) {
    const typeClass = className ? className : 'button-action';
    const typeButton = type ? type : 'button';
  return <button onClick={onClick} className={"button "+ typeClass} type={typeButton}>{text}</button>;
}

function BuildCard({status, date, hash, owner, trunk, comment, commit, time}) {
    const statusLogo = status === 'wait' ? <BuildWaitLogo/> : status === 'error' ? <BuildErrorLogo/> : <BuildDoneLogo/>;
    return (<div className='build-card shadow'>
        <div className="build-status">
            {statusLogo}
        </div>
        <div className='build-content'>
            <div className="build-body">
                <div className='build-body-element'>
                    <div>
                        <span className={'build-status-'+status}>#{commit}</span>
                    </div>
                    <div>
                        <span className="text-15 text-main">{comment}</span>
                    </div>
                </div>
                <div className='build-body-element'>
                    <div className="text-13">
                        <span style={{opacity: 0.3, display:'inline-block', verticalAlign: 'middle'}}><CommitLogo/></span> <span className="text-main">{trunk}</span> {hash}
                    </div>
                    <div className="text-13">
                        <span style={{opacity: 0.3, display:'inline-block', verticalAlign: 'middle'}}><UserLogo/></span> {owner}
                    </div>
                </div>
            </div>
            <div className="build-datetime">
                <div>
                    <span style={{opacity: 0.3, display:'inline-block', verticalAlign: 'middle'}}>
                        <CalendarLogo />
                    </span> <span className="text-13">{date}</span>
                </div>
                <div>
                    <span style={{opacity: 0.3, display:'inline-block', verticalAlign: 'middle'}}>
                        <ClockLogo/>
                    </span> <span className="text-13">{time}</span>
                </div>
            </div>
        </div>
    </div>)
}

function AsLogo() {
    const location = useLocation().pathname;
    let asLogo;
    if (location !== '/build-history') {
        asLogo = <div className="logo"><Link to="/">School CI server</Link></div>;
    } else {
        asLogo = <h2 className="text-main">philip1967/my-aw esome-repo-with-long-long-long-repo-name</h2>;
    }
    return asLogo;
}

function ButtonGroup({modal}) {
    const location = useLocation().pathname;
    let buttons = [];
    if (location === '/build-history') {
        buttons.push(<IconButton key='1' text="Run build" onClick={modal} icon={() => <RunLogo/>}/>)
    }
    if (location !== '/settings') {
        const shadow = location === '/';
        const text = location === '/' ? 'Settings' : null;
        buttons.push(<IconButton key='0' text={text} icon={() => <CogLogo/>} shadow={shadow}/>)
    }
    return (<div className="top-button-group">{buttons}</div>);
}

function App() {
    const [isOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
        <ReactModal 
            isOpen={isOpen}
            ariaHideApp={false}
            contentLabel="Minimal Modal Example"
            style={{
                overlay: {
                  backgroundColor: 'rgba(0,0,0,0.4)'
                },
                content: {
                    width: '485px',
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
            <h2 className="text-main">New build</h2>
            <div className="text-main">Enter the commit hash which you want to build.</div>
            <div className="ptb-1">
                <div className="group-input ptb-1">
                    <input name="run" className="input-field" placeholder="master" style={{width: '455px'}}></input>
                </div>
            </div>
            <div>
                <Button onClick={closeModal} text='Run build'/> <Button onClick={closeModal} className="button-control" text='Cancel'/>
            </div>
        </ReactModal>
        <div className='layout'>
            <Router>
                <header>
                    <AsLogo/>
                    <div style={{flex: 1}}></div>
                    <ButtonGroup modal={() => setIsOpen(true)}/>
                </header>
                <main>
                    <Switch>
                    <Route path="/build-history">
                        <BuildHistory />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Switch>
                </main>
            </Router>
            <footer>
            <span className="mw-50">
                <a href="/" className="p-1">Support</a>
                <a href="/" className="p-1">Learning</a>
                <a href="/" className="p-1">Русская версия</a>
            </span>
            <span className="mw-50 cr">
                <span className="p-1 pr-100">© 2021 MyName</span>
            </span>
            </footer>
        </div>
        </>
    );
}

function Home() {
    return (
        <div>
        <div className='text-main text-center' style={{width: '260px', display: 'inline-block'}}>
            <ReactLogo/>
            <div className='p-1'>Configure repository connection and synchronization settings</div>
            <Link to="/settings"><Button text="Open settings"/></Link>
            </div>
        </div>);
}

function Settings() {
    function onChange(val) {
        console.log(val);
    }

    return (<form style={{maxWidth: '470px'}}>
        <div className="text-15 text-bold text-main">Settings</div>
        <span className="text-13 ptb-1" style={{marginBottom:'12px'}}>Configure repository connection and synchronization settings.</span>
        <div className="ptb-1">
            <label htmlFor="repo" className="block text-main text-13">GitHub repository <span className="text-required">*</span></label>
            <div className="group-input ptb-1">
                <i className="icon"><ClearLogo/></i>
                <input name="repo" className="text-13 input-field w-100" placeholder="user-name/repo-name"></input>
            </div>
        </div>
        <div className="ptb-1">
            <label htmlFor="cmd" className="block text-main text-13">Build command <span className="text-required">*</span></label>
            <div className="group-input ptb-1">
                <i className="icon"><ClearLogo/></i>
                <input name="cmd" className="input-field w-100" placeholder="command"></input>
            </div>
        </div>
        <div className="ptb-1">
            <label htmlFor="branch" className="block text-main text-13">Main branch</label>
            <div className="group-input ptb-1">
                <i className="icon"><ClearLogo/></i>
                <input name="branch" className="input-field w-100" placeholder="master"></input>
            </div>
        </div>
        <div className="text-main text-13 ptb-1">
            Synchronize every <input className="input-field" defaultValue="10" style={{width: '60px', textAlign: "end"}} onKeyPress={onChange}/> minutes
        </div>
        <div className="ptb-1"><Button text="Save"/> <Button className="button-control" text="Cancel"/></div>
    </form>);
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
const statuses = ['wait', 'error', 'done'];

const cards = [];
for (let i=0; i<10; i++) {
    cards.push({
        date: randomDate(new Date(0), new Date()),
        time: Math.floor(Math.random()*120),
        status: statuses[randomInteger(0, 2)],
        trunk: ['master', 'super-col-ui-kit'][randomInteger(0,1)],
        hash: ['a12335bb','9c9f13b5', '39491243', 'abfd42ef'][randomInteger(0,3)],
        comment: 'upgrade typescript to 3.8',
        owner: ['asdad', 'fhfdgh', 'SAFsd ESGSE'][randomInteger(0,2)],
        commit: Math.floor(Math.random()*1000),
    });
}

function BuildHistory() {
    const cartObjects = [];
    for (let card of cards) {
        let monthString = card.date.toLocaleString('default', {'month': 'short'});
        monthString = monthString.length === 3 ? monthString : monthString.slice(0,-1);
        const timeString = card.date.toLocaleString('default', {'hour': '2-digit', 'minute': '2-digit'});
        const dateString = `${card.date.getDay()+1} ${monthString}, ${timeString}`;
        const usedTimeString = `${Math.floor(card.time/60)} ч ${card.time%60} мин`;
        cartObjects.push(<BuildCard key={card.commit} status={card.status} trunk={card.trunk} hash={card.hash} date={dateString} commit={card.commit} comment={card.comment} owner={card.owner} time={usedTimeString}/>)
    }

    return (
        <div className="build-wrapper">
            {cartObjects}
        </div>
    );
}

export default App;
