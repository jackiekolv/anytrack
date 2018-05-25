import React from 'react';

export default class ResultTrackingInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingNo: this.props.trackingNo,
        };
    }
    
    renderItemStatus(trackingNo){
        this.props.trackingNo
    }

    render() {
      return (
        <div className="row">
            <div className="col s12">
                <ul class="collection">
                    <li class="collection-item avatar">
                        <img src="https://th.kerryexpress.com/th/img/page_track/status/piority-success.png" alt="" class="circle" />
                        <span class="title">{this.props.trackingNo}</span>
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
      );
    }
}