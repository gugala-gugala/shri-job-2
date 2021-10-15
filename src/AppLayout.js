import { AppHeader } from './AppHeader';
import AppMain from './AppMain';
import { AppFooter } from './AppFooter';

import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { RepositoryContext } from './context/repo'
import useRepositoryData from './repo/data';

export const AppLayout = () => {
    const [settings, setSettings, cards] = useRepositoryData();

    return (
    <div className='layout'>
        <RepositoryContext.Provider
          value={{ settings, setSettings, cards }}
        >
            <Router>
                <AppHeader/>
                <AppMain/>
            </Router>
            <AppFooter/>
        </RepositoryContext.Provider>
    </div>);
}
