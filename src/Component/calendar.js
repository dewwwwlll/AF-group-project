import React , {Component} from 'react';
import Calendar from 'react-calendar';



class CalendarComponent extends Component{

    state = {
        date : new Date()
    }

    onchange = (date) => {
          this.setState({date})
    }

    render() {
        return(
            <div>
                <h2>Calendar</h2>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }

}

export default CalendarComponent;