import {
    Switch,
    Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { BuildHistory } from './pages/BuildHistory';
import { RepositoryContext } from './context/repo';
import {useContext} from 'react'

export default function AppMain() {
    const { settings } = useContext(RepositoryContext);

    return (<main>
        <Switch>
        <Route path="/build-history">
            <BuildHistory />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
        <Route exact path="/">
            { settings.repo ? <BuildHistory/> : <Home />}
        </Route>
        </Switch>
    </main>);
}
