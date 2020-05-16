import React from 'react';
import List from '../components/list';
import { useHistory } from 'react-router-dom';

const FlightResults = () => {
    const history = useHistory();
    return (
        <div>
            <div className="btn" onClick={(e) => {
                e.preventDefault();
                history.goBack();
            }}>Back</div>
            <List listData={
                [ {title: 'Ethopian Airways'},
                {title: 'British Airways'},
                {title: 'India Airways'}]
            } />
        </div>
    );
}

export default FlightResults;