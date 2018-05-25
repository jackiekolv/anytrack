import React from 'react';

export default class ResultInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: null,
        };
    }
    render() {
      return (
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
      );
    }
}