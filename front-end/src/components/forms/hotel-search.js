import React from 'react';

const HotelSearchForm = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="depart-date">From Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="return-date">To Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label for="destination">Guests</label>
                    <select className="form-control">
                        <option value="one">1 Adult</option>
                        <option value="two">2 Adult</option>
                        <option value="three">3 Adult</option>
                        <option value="four">4 Adult</option>
                        <option value="five">5 Adult</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="destination">Room Type</label>
                    <select className="form-control">
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="queen">Queen size</option>
                        <option value="king">King size</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="form-button" onClick={(e) => {
                        e.preventDefault();
                    }}>Search Hotels</button>
                </div>
            </form>
        </div>
    );
}

export default HotelSearchForm;