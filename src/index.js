import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './component/SearchBox.jsx';
import ResultInfo from './component/ResultInfo.jsx';
import ResultTrackingInfo from './component/ResultTrackingInfo.jsx';
import './materialize/css/materialize.css';
import 'font-awesome/css/font-awesome.min.css';
import { observable } from 'mobx';


class TrackingPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingNo: ''
        };
    }

    renderDoSearch(input){
        this.setState(
            (state) => {
                return Object.assign({}, state, {trackingNo: input});
            }
        );

    }

    render () {
        return (
            <div class="container">
                <div class="section">
                    <div class="card darken-1">
                        <div class="card-content row">
                            <div className="col s12 m6">
                                <span class="card-title">AnyTrack</span>
                                <p>Put your tracking no.</p>
                                <SearchBox doSubmit={this.renderDoSearch}/>
                                <img style={{ width: '100%', height: '100px',marginTop: '-25px', display: 'inline-block' }} src="https://www.arranbanner.co.uk/wp-content/uploads/sites/71/2017/06/cropped-arran-banner-new-logo.gif" />
                            </div>
                            <div className="col s12 m6" style={{ display: '' }}>
                                <ResultInfo/>
                                <ResultTrackingInfo trackingNo={this.state.trackingNo} />
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
