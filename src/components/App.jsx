import React, { Component} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";
import Notification from "./Messaje/Message";

export class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
  handleFeedback = (evt)=> {
    console.log('Clicked button:', evt.target);
    console.log('Button name:', evt.target.name);
    const {name} = evt.target; 
    this.setState( prevState => ( { [name] : prevState[name] + 1}));
  }
    render(){
      const {good, neutral, bad} = this.state
      const total = good + neutral + bad
      const percentage = ((good/ total) * 100).toFixed(0) ?? 0;
      const options =['good', 'neutral', 'bad'];
      return(
        <>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback}/>
          {
            total > 0
             ? 
             (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={`${percentage}%`}/>)
            :
              (<Notification message="There is no feedback"></Notification>)
          }
        </Section>
        </>
      )
    }
}