import {ReactComponent as BuildWaitLogo} from '../icons/clock_24.svg';
import {ReactComponent as BuildDoneLogo} from '../icons/done_24.svg';
import {ReactComponent as BuildErrorLogo} from '../icons/fail_24.svg';
import {ReactComponent as ClockLogo} from '../icons/16_stopwatch.svg';
import {ReactComponent as CommitLogo} from '../icons/16_code-commit.svg';
import {ReactComponent as UserLogo} from '../icons/16_user.svg';
import {ReactComponent as CalendarLogo} from '../icons/16_calendar.svg';
import '../BuildCard.css';

export const BuildCard = ({status, date, hash, owner, trunk, comment, commit, time}) => {
    const statusLogo = status === 'wait' ? <BuildWaitLogo/> : status === 'error' ? <BuildErrorLogo/> : <BuildDoneLogo/>;
    return (<div className='build-card'>
        <div className="build-status">
            {statusLogo}
        </div>
        <div className='build-content'>
            <div className="build-body">
                <div className='build-body-element'>
                    <div>
                        <span className={'build-status build-status-'+status}>#{commit}</span>
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

export default BuildCard;
