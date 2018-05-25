import React from 'react';
import GlobalState from 'GlobalState.js'

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingNo: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({trackingNo: event.target.value});
    }

    submitInput(){
      console.log(this.state.trackingNo);
      this.props.doSubmit(this.state.trackingNo);
      let globalState = GlobalState.getinstance();

      globalState.get
    }

    callAPI(trackingNo){
      return {
        title: "Packing",
        statusCode: "",
        statusDes: ""
      };
    }

    render() {
      return (
        <div className="row">

          <div className="col s6 m7">
              <div className="input-field">
                  <input placeholder="Tracking No." id="tracking" value={this.state.trackingNo} onChange={this.handleChange} type="text" class="validate" />
              </div>
          </div>

          <div className="col s4 m5">
              <button onClick={(evt) => {this.submitInput()}} class="btn waves-effect waves-light" style={{ marginTop: '15px' }} type="button" name="action">
                  <span>Search</span>
              </button>
          </div>
          
        </div>
      );
    }
}