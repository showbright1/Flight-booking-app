import React from 'react';


const AppHeader = (props) => {

    return (
        <div className="app-bar app-header" >
            <div className="brand-logo">Logo</div>
        </div>
    )
}

const AppFooter = () => (
    <div className="app-bar app-footer" >
        <div>All rights reserved</div>
    </div>
)

const AppMain = (props) => (
    <div className="app-main" >
        { props.children }
    </div>
)

const AppSections = { AppHeader, AppFooter, AppMain };

export default AppSections;
