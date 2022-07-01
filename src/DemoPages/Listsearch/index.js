import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import ListListjs from './Listjs/';
import CardCardjs from './Cardjs/';
// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const ListSearch = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Listsearch */}

                    <Route path={`${match.url}/Listjs`} component={ListListjs}/>
                    <Route path={`${match.url}/Cardjs`} component={CardCardjs}/>

                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default ListSearch;