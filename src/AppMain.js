import {
    Switch,
    Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { BuildHistory } from './pages/BuildHistory';

export default function AppMain({settings, setSettings}) {
    return (<main>
        <Switch>
        <Route path="/build-history">
            <BuildHistory />
        </Route>
        <Route path="/settings">
            <Settings setSettings={setSettings}/>
        </Route>
        <Route exact path="/">
            { settings ? <BuildHistory/> : <Home />}
        </Route>
        </Switch>
    </main>);
}
