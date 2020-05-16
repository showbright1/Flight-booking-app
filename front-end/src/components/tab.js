import React, { useState } from 'react';

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    
    const TabButton = (props) => {
        return (
        <div className={`tab-button ${ (activeTab === props.id) ? 'active-tab-button' : '' } ` } 
            onClick={() => setActiveTab(props.id)}>
            {props.name}
        </div>
    )};
    
    const TabContent = (props) => {
        return (
        <div className={`tab-content ${ (activeTab === props.id) ? 'active-tab-content' : '' } ` } id={props.id}>
            <props.content />
        </div>
    )};

    return (
        <div className="tabs-container">
            <div className="tab-buttons">
                { props.data.map((el, index) => <TabButton name={el.name} id={index} key={el.name} />) }
            </div>
                <div className="">
                { props.data.map((el, index) => <TabContent content={el.content} id={index} key={el.name} />) }
                
            </div>
        </div>
    );
};


export default Tabs;