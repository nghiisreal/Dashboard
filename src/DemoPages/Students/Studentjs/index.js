import React, {Component, Fragment} from 'react';

// import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
// import ChartJsCircular from './Examples/Circular';
// import ChartJsLinesBars from './Examples/LinesBars';
import Student from './Examples/index';

export default class ChartJSExamples extends Component {
    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Students"
                    subheading="Information of student in University"
                    icon="pe-7s-study icon-gradient bg-amy-crisp"
                />
                {/* <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/> */}
                <Student/>
            </Fragment>
        );
    }
}