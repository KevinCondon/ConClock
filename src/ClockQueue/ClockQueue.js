import React, { Component } from "react";
import Clock from 'react-live-clock';


class ClockQueue extends Component {

    constructor({ props }) {
        super(props);
        this.state = {
            cards: [],
        };


    }

	static getDerivedStateFromProps(props, state){
		// getDerivedStateFromProps https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
		// "Deriving state leads to verbose code and makes your components difficult to think about."
		// "Make sure you’re familiar with simpler alternatives"
		// if the length is 0 and state.init is false
		// set state of card to be true 
		if ( state.cards.length === 0 && !state.init /* <--- what happens? */ ) {
			return {
				cards: props.cards,
				init: true
			};
		}
		return null;
	}


    componentDidMount() {


    }

    render() {
        return <div>
                {this.state.cards.map((card, index) => (
                    <div>
                    <Clock
                    key={card.id}
                    date={card.Time}
                    index={index}

                   // format={'dddd, MMMM Mo, YYYY, h:mm:ss A'}
                        // date={card.Time}
                         format={'h:mm:ss'}
                        ticking={true}
                        timezone={'US/Central'}
                    />
                        </div>

                ))}
            </div>
    }
    


}

export default ClockQueue;
