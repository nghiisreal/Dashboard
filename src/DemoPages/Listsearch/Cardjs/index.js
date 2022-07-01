import React, {Component, Fragment} from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
// import List from './Example/List';
import Search from './Examples/Search/Search';

export default class ListSearchExamples extends Component {
    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="ListSearch"
                    subheading="Can search all cârd"
                    icon="pe-7s-id icon-gradient bg-amy-crisp"
                />
                <Search/>
            </Fragment>
        );
    }
}