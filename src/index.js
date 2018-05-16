import React from 'react';
import ReactDOM from 'react-dom';
import Square from './component/TrackingPanel.jsx';
import './materialize/css/materialize.css';
import 'font-awesome/css/font-awesome.min.css';


class TrackingPanel extends React.Component {

    render () {
        return (
            <div class="container">
                <div class="section">
                    <div class="card darken-1">
                        <div class="card-content row">
                            <div className="col s12 m6">
                                <span class="card-title">AnyTrack</span>
                                <p>Put your tracking no.</p>
                                <div className="row">
                                    <div className="col s6 m7">
                                        <div className="input-field">
                                            <input placeholder="Tracking No." id="tracking" type="text" class="validate" />
                                        </div>
                                    </div>

                                    <div className="col s4 m5">
                                        <button class="btn waves-effect waves-light" style={{ marginTop: '15px' }} type="button" name="action">
                                            <span>Search</span>
                                        </button>
                                    </div>
                                </div>
                                <img style={{ width: '100%', height: '100px',marginTop: '-25px', display: 'inline-block' }} src="https://www.arranbanner.co.uk/wp-content/uploads/sites/71/2017/06/cropped-arran-banner-new-logo.gif" />
                            </div>
                            <div className="col s12 m6" style={{ display: '' }}>
                                <div className="row">
                                    <div className="col s12">
                                        <ul class="collection">
                                            <li class="collection-item avatar">
                                                <img src="https://th.kerryexpress.com/th/img/page_track/status/piority-success.png" alt="" class="circle" />
                                                <span class="title">Title</span>
                                                <p>First Line</p>
                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <ul class="collection">
                                            <li class="collection-item avatar">
                                                <img src="https://th.kerryexpress.com/th/img/page_track/status/piority-success.png" alt="" class="circle" />
                                                <span class="title">Title</span>
                                                <p>First Line
                                                    Second Line
                                                </p>
                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                            </li>
                                            <li class="collection-item avatar">
                                                <i class="fa fa-4x fa-check circle" style={{ fontSize: '2em', display: 'none' }} aria-hidden="true"></i>
                                                <img src="http://th.kerryexpress.com/th/img/page_track/status/normaly-waiting.png" alt="" class="circle" />
                                                <span class="title">Title</span>
                                                <p>First Line
                                                    Second Line
                                                </p>
                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                            </li>
                                            <li class="collection-item avatar">
                                                <i class="fa fa-clock-o circle" style={{ fontSize: '2em', display: 'none' }} aria-hidden="true"></i>
                                                <img src="http://th.kerryexpress.com/th/img/page_track/status/normaly-waiting.png" alt="" class="circle" />
                                                <span class="title">Title</span>
                                                <p>First Line
                                                    Second Line
                                                </p>
                                                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <TrackingPanel />,
    document.getElementById('root')
);
