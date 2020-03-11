import React, { Component } from "react";
import Clock from 'react-live-clock';


class ClockQueue extends Component {

    constructor({props}) {
        super(props);
        this.state = {
            show: true,
            value: "",
            cards: [],
            init: false
        };


    }

    static getDerivedStateFromProps(props, state) {

        if (state.cards.length === 0 && !state.init /* <--- what happens? */) {
            return {
                cards: props.cards,
                init: true
            };
        }
        return null;
    }
    
    toggleComponent() {
        this.setState({ show: !this.state.show });
    }
    
    componentDidMount() {


    }

    render() {

        return (
            <Clock
            format={'h:mm:ss'} 
            ticking={true} 
            timezone={'US/Central'}         
            />)
    }

}

export default ClockQueue;
