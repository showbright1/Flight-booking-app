import React from 'react';
import { useHistory } from 'react-router-dom';

const FlightSearchForm = () => {
    const history = useHistory();
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="departure">Departure</label>
                    <select className="form-control">
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="destination">Destination</label>
                    <select className="form-control">
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="depart-date">Depart Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="return-date">Return Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="destination">Travelers</label>
                    <select className="form-control">
                        <option value="one">1 Adult</option>
                        <option value="two">2 Adult</option>
                        <option value="three">3 Adult</option>
                        <option value="four">4 Adult</option>
                        <option value="five">5 Adult</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="destination">Class</label>
                    <select className="form-control">
                        <option value="economy">Economy</option>
                        <option value="basic">Basic</option>
                        <option value="main">Main</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="form-button" onClick={(e) => {
                        e.preventDefault();
                        history.push('flight-results');
                    }}>Search Flights</button>
                </div>
            </form>
        </div>
    );
}

export default FlightSearchForm;