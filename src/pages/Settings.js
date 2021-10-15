import Button from '../components/Button';
import CleanableInput from '../components/CleanableInput';
import ButtonContainer from '../components/ButtonContainer';
import { useHistory } from 'react-router';
import { useState, useContext } from 'react';
import { RepositoryContext } from '../context/repo';

export function Settings() {
    const { setSettings } = useContext(RepositoryContext);

    const [saveState, setSaveState] = useState(true);
    const [nosaveState, setNoSaveState] = useState(true);

    const history = useHistory();
    function onSubmit(e) {
        e.preventDefault();
        setSaveState(false);
        setNoSaveState(false);

        const values = [...e.target]
        .filter((element) => element.name)
        .reduce((result, { name, value }) => {
          result[name] = value;
          return result;
        }, {});

        setTimeout(function() {
            if (Math.random() < 0.7) {
                setSettings(values);
                history.push("/", {update: true});
            } else {
                setSaveState(true);
                setNoSaveState(true);
                alert('Произошла ошибка. Попробуйте еще раз');
            }
        }, 700);
    }

    return (<div className='flex-left w-100'>
        <form className="w-100" style={{maxWidth: '470px'}} onSubmit={onSubmit}>
            <div className="text-15 text-bold text-main ptb-1">Settings</div>
            <span className="text-13 ptb-1" style={{marginBottom:'12px'}}>
                Configure repository connection and synchronization settings.
            </span>
            <div className="ptb-1" style={{marginTop: '12px'}}>
                <label htmlFor="repo" className="display-block text-main text-13 text-required">GitHub repository</label>
                <CleanableInput name="repo" inputClassName="text-13 input-field" placeholder="user-name/repo-name" required/>
            </div>
            <div className="ptb-1">
                <label htmlFor="cmd" className="display-block text-main text-13 text-required">Build command</label>
                <CleanableInput name="cmd" inputClassName="text-13 input-field" placeholder="command" required/>
            </div>
            <div className="ptb-1">
                <label htmlFor="branch" className="display-block text-main text-13">Main branch</label>
                <CleanableInput name="branch" inputClassName="text-13 input-field" placeholder="master"/>
            </div>
            <div className="text-main text-13 ptb-1">
                <span>Synchronize every </span> 
                <input className="input-field m-1" title='Time in minutes' defaultValue="10" style={{width: '23px', textAlign: "end"}} pattern='\d+' required/>
                <span> minutes</span>
            </div>
            <ButtonContainer>
                <Button key='save' disabled={!saveState} className="button-action w-100-xl">Save</Button>
                <Button key='nosave' disabled={!nosaveState} className="button-control w-100-xl" type='button' onClick={()=>{ setSettings({}); history.goBack()}}>Cancel</Button>
            </ButtonContainer>
        </form>
    </div>);
}