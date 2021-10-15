import { AppHeader } from './AppHeader';
import AppMain from './AppMain';
import { AppFooter } from './AppFooter';

import React, { useState } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export const AppLayout = () => {
    const [settings, setSettings] = useState(null);
    return (
    <div className='layout'>
        <Router>
            <AppHeader settings={settings}/>
            <AppMain settings={settings} setSettings={setSettings}/>
        </Router>
        <AppFooter/>
    </div>);
}
