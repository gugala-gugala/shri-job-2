import { useState } from "react";
import {ReactComponent as ClearLogo} from '../icons/clear.svg';

export default function CleanableInput({className, inputClassName, placeholder, name, required}) {
    const [cleanVisible, setCleanVisible] = useState("hidden");
    const [value, setValue] = useState('');

    function onChange(event) {
        setValue(event.target.value)
		setCleanVisible((event.target.value.length) ? "visible" : "hidden");
    }
	function onClean() {
        setCleanVisible("hidden");
		setValue("");
	};

    return (
        <div className={className} style={{position: 'relative', paddingRight: '30px'}}>
            <input style={{width: '100%'}} className={inputClassName} name={name}
             placeholder={placeholder} type="text" value={value} onChange={onChange} required={required}/>
            <div style={{position: "absolute", top: '2px', right: '2px', height:'36px'}}>
                <ClearLogo title="Clear" onClick={onClean} style={{visibility: cleanVisible}}/>
            </div>
        </div>
    )
}