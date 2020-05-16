import React from 'react';

const CarSearchForm = () => {
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
                    <label for="destination">Car Type</label>
                    <select className="form-control">
                        <option value="single">Hatchback</option>
                        <option value="single">Sedan</option>
                        <option value="double">Semi SUV</option>
                        <option value="queen">SUV</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="form-button" onClick={(e) => {
                        e.preventDefault();
                    }}>Search Cars</button>
                </div>
            </form>
        </div>
    );
}

export default CarSearchForm;