import React from 'react';
import './Chart.css';

const Chart = () => {
    
    return (
        <>
        
        <div id="frame">
           
        <div id="sidepanel">
            <div id="profile">
                <div className="wrap">
                    <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
                    <p>Mike Ross</p>
                    <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                    <div id="status-options">
                        <ul>
                            <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                            <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                            <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                            <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
                        </ul>
                    </div>
                    <div id="expanded">
                        <label htmlFor="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                        <input name="twitter" type="text" value="mikeross" readOnly/>
                        <label htmlFor="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                        <input name="twitter" type="text" value="ross81" readOnly/>
                        <label htmlFor="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                        <input name="twitter" type="text" value="mike.ross" readOnly/>
                    </div>
                </div>
            </div>
            <div id="search">
                <label htmlFor=""><i className="fa fa-search" aria-hidden="true"></i></label>
                <input type="text" placeholder="Search contacts..." />
            </div>
            <div id="contacts">
                <ul>
                    <li className="contact">
                        <div className="wrap">
                            <span className="contact-status online"></span>
                            <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                            <div className="meta">
                                <p className="name">Louis Litt</p>
                                <p className="preview">You just got LITT up, Mike.</p>
                            </div>
                        </div>
                    </li>
                    <li className="contact active">
                        <div className="wrap">
                            <span className="contact-status busy"></span>
                            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                            <div className="meta">
                                <p className="name">Harvey Specter</p>
                                <p className="preview">Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and htmlForty six other things.</p>
                            </div>
                        </div>
                    </li>
                    <li className="contact">
                        <div className="wrap">
                            <span className="contact-status away"></span>
                            <img src="http://emilcarlsson.se/assets/rachelzane.png" alt="" />
                            <div className="meta">
                                <p className="name">Rachel Zane</p>
                                <p className="preview">I was thinking that we could have chicken tonight, sounds good?</p>
                            </div>
                        </div>
                    </li>
                    <li className="contact">
                        <div className="wrap">
                            <span className="contact-status online"></span>
                            <img src="http://emilcarlsson.se/assets/donnapaulsen.png" alt="" />
                            <div className="meta">
                                <p className="name">Donna Paulsen</p>
                                <p className="preview">Mike, I know everything! I'm Donna..</p>
                            </div>
                        </div>
                    </li>
                 
                </ul>
            </div>
            <div id="bottom-bar">
                <button id="addcontact"><i className="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
                <button id="settings"><i className="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
            </div>
        </div>
        <div className="content">
            <div className="contact-profile">
                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                <p>Harvey Specter</p>
                <div className="social-media">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                     <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
            <div className="messages">
                <ul>
                    <li className="sent">
                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                        <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
                    </li>
                    <li className="replies">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>When you're backed against the wall, break the god damn thing down.</p>
                    </li>
                    <li className="replies">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>Excuses don't win championships.</p>
                    </li>
                    <li className="sent">
                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                        <p>Oh yeah, did Michael Jordan tell you that?</p>
                    </li>
                    <li className="replies">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>No, I told him that.</p>
                    </li>
                    <li className="replies">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>What are your choices when someone puts a gun to your head?</p>
                    </li>
                    <li className="sent">
                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                        <p>What are you talking about? You do what they say or they shoot you.</p>
                    </li>
                    <li className="replies">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and htmlForty six other things.</p>
                    </li>  <li className="sent">
                        <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                        <p>What are you talking about? You do what they say or they shoot you.</p>
                    </li>
                    <li className="replies">
                        <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                        <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and htmlForty six other things.</p>
                    </li>
                </ul>
            </div>
            <div className="message-input">
                <div className="wrap">
                <input type="text" placeholder="Write your message..." />
                <label>

               
                <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                <input className="d-none" type="file" name="file" id="file"/>
                </label>
                <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Chart;