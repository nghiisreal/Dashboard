import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import Student from './Studentjs/';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Students = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/studentjs`} component={Student}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Students;