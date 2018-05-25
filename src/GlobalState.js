import { observable, autorun } from 'mobx';

class GlobalState {
    static instance = null;

    constructor(){
        let state = observable({
            trackingNo: ''
        })
    }

    getState(){
        return this.state;
    }

    setState(state){
        this.state = Object.assign({}, this.state, {
            trackingNo: state.trackingNo
        });

    }

    static getInstance() {
        if(GlobalState.instance) {
            GlobalState.instance = new GlobalState();
        }

        return GlobalState.getInstance;
    }
}

export default GlobalState;