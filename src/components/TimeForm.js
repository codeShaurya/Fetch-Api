/**
 * Created by shubham on 2/7/17.
 */
import React, { Component } from 'react';
import './style/index.css';
import 'whatwg-fetch';
const timezones = ['PST','MST', 'MDT', 'EST', 'UTC']


class TimeForm extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.changeMsg=this.changeMsg.bind(this);
    this.changeTimezone=this.changeTimezone.bind(this);
    this.handleChange=this.handleChange.bind(this);

    const {tz, msg} = this.props;
    this.state = {tz, msg};
  }

  handleChange(e) {
    typeof this.props.onFormChange === 'function' &&
    this.props.onFormChange(this.state);
  }

  changeTimezone(e) {
    const tz = e.target.value;
    this.setState({tz}, this.handleChange);
  }

  changeMsg(e) {
    const msg =
      encodeURIComponent(e.target.value).replace(/%20/, '+');
    this.setState({msg}, this.handleChange);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    //typeof this.props.onFormSubmit === 'function' &&
   // this.props.onFormSubmit(this.state);
  }

  render() {
    const {tz} = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className="App">
        <select onChange={this.changeTimezone} defaultValue={tz}>
          {timezones.map(t => {
            return (<option key={t} value={t}>{t}</option>)
          })}
        </select>
        <input type="text" placeholder="Enter your messege here" onChange={this.changeMsg}/>
        <input type="submit" value="Update request"/>
      </form>
    )
  }
}

export default TimeForm;
