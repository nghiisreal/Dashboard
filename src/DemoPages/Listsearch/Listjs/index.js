import React, {Component, Fragment} from 'react';
import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import Show from './Example/Showsearch/Search'
import Search from './Example/Search/Search';
const tabsContent = [
    {
        title: 'Search with button',
        content: <Search/>
    },
    {
        title: 'Show list search',
        content: <Show/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}
export default class ListSearchExamples extends Component {
    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="ListSearch"
                    subheading="Can search a list"
                    icon="pe-7s-search icon-gradient bg-amy-crisp"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}