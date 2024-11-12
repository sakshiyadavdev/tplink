import React from 'react';
import { FaLevelDownAlt, FaTelegram } from 'react-icons/fa';
import { Gi3dMeeple } from 'react-icons/gi';

const MainPage = React.memo(function MainPage() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100" id='bg-img'>
                <div className="card text-center shadow p-4" style={{ maxWidth: '100%', background: '#c8babaed'}}>
                    <div className="card-body">
                        <h2 className="card-title mb-4 text-primary">
                            <FaTelegram size={36} /> Join Us on Telegram!
                        </h2>
                        <p style={{fontWeight:"bold"}}>JOIN TO GET RICH FAST & GUARANTEED</p>
                        <p className="card-text">
                           Ready to &nbsp;
                           <span style={{color:"green", fontWeight:"bold"}}>EARN</span>&nbsp;
                           with US <Gi3dMeeple /><br/>
                           CLICK THE BUTTON BELOW <FaLevelDownAlt style={{color:"blue"}} /><br/>
                           <span style={{fontWeight:"bold", color:"blue"}}>And Receive Your Immidiate Access To My Free Telegrem Group</span>

                        </p>
                        <a
                            href="https://t.me/+0Syu8Di3yB1mZmQ1" 
                            className="btn btn-primary btn-lg mt-3"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTelegram size={24} className="me-2" /> Join Now
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
});

export default MainPage; 