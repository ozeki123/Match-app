import React, { useState } from 'react';
import './item.scss';

const Item = () => {

    //Fetch mock data
    const [data, setData] = useState(null);

    fetch('../../data/item-data.json')
        .then((res) => {
            return res.json()
        }).then((data) => {
                setData(data)
        }).catch((err) => {
            console.log(err, 'fetch failed')
        })

    return (
        <div className="item-container">
            <div className="item-contents">
                <div className="item-header-section">
                    <h1>Footsal Field ・ Kudankita, Tokyo</h1>  
                    <div className="item-sub-text">
                        <div className="item-rating">
                            <p>5.0</p>
                            <p>4 Reviews</p>
                        </div>
                        <p>Chiyoda-ku, Tokyo, Japan</p>
                        <div className="item-actions">
                            <p>Share</p>
                            <p>Save</p>
                        </div>
                    </div>
                </div>
                <div className="item-main-section">
                    <div className="item-main">
                        <div className="item-main-header">
                            <h2>Footsal Field hosted by Andrew Ozeki</h2>
                            <p>Entire field ・ 2 goals</p>
                        </div>
                        <hr/>
                        <div className="item-main-text">
                            <p>Indoor footsal field located in Kudankita. Perfect for practice, </p>
                            <p>games, or just to play with your friends! You will have the entire field </p>
                            <p>to yourself. The field comes with two goals, and additional equipment</p>
                            <p>can be found in the storage room, such as soccer balls, jerseys, </p>
                            <p>and scoreboards. This facility is only available from 8am to 11pm. </p>
                            <p>Please contact me in the event you would like to use the field</p>
                            <p> outside of the above specified time.</p>
                        </div>
                        <hr/>
                        <div className="item-details">
                            <h2>Details</h2>
                            <div className="item-address">Tokyo, Chiyoda-ku Kudankita 1-2-3 Ichigaya Sports Center B3F</div>
                            <div className="item-capacity">40 people</div>
                            <div className="item-available">9:00 AM ~ 23:00PM</div>
                        </div>
                        <hr/>
                        <div className="item-reviews">
                            <h2>Reviews</h2>
                            <div className="item-rating">
                                <p>5.0</p>
                                <p>4 Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-checkout">
                        <div className="item-price">
                            <h5>¥10,000</h5>
                            <h6>/ night</h6>
                        </div>
                        <div className="item-form">
                            <div className="item-duration">
                                <input placeholder="Add date"/>
                                <input placeholder="Add date"/>
                            </div>
                            <input placeholder="1 Guest"/>
                        </div>
                        <button>Check Availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
