import React from 'react';
import Tabs from '../components/tab';

import FlightSearchForm from '../components/forms/flight-search';
import HotelSearchForm from '../components/forms/hotel-search';
import CarSearchForm from '../components/forms/car-search';

const Activity = () => (<div>Activity form</div>)

const SearchForm = () => {
    return (
        <React.Fragment>
            <Tabs data={
                [ { name:"Flights", content: FlightSearchForm },
                { name:"Hotels", content: HotelSearchForm },
                { name:"Cars", content: CarSearchForm },
                { name:"Activity", content: Activity } ]
            } />
        </React.Fragment>
    );
};

export default SearchForm;