import React from 'react';
import { Tabs } from 'antd';

//components import
import {Button} from "./common/Button";

//assets import

class Experience extends React.Component {
    //
    render() {

        const { TabPane } = Tabs;

        return (
            <div>
                <Tabs defaultActiveKey="1" tabPosition={"left"}>
                    <TabPane key={"1"} tab={"Firm 23"}>

                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Experience;