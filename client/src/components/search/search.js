import React from 'react';
import './search.scss';

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-contents">
                <div className="search-header">
                    <p>4 Courts in Tokyo</p>
                    <h1>Courts in Japan</h1>
                    <div className="search-filters">
                        <ul>
                            <li>Sport</li>
                            <li>Court Type</li>
                            <li>Price</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="search-main">
                    <div className="search-item">
                        <img/>
                        <div className="search-item-details">
                            <p>Outdoor footsal field in Chiyoda-ku</p>
                            <h6>Footsal Field ・ Kudankita, Tokyo</h6>
                            <p>40 guests・2 goals ・2 mini goals</p>
                            <p>9:00AM ~ 23:00PM</p>
                            <div className="item-details-footer">
                                <div className="item-rating">
                                    <p>5.0</p>
                                    <p>4 Reviews</p>
                                </div>
                                <div className="item-price">
                                    <h5>¥10,000</h5>
                                    <h6>/ night</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
