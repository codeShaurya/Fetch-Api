/**
 * Created by shubham on 2/7/17.
 */
/**
 * Created by shubham on 2/7/17.
 */
import React, { Component } from 'react';

import './style/index.css';



class Poem extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const verseChoose = document.querySelector('#verse-choose');
    const poemDisplay = document.querySelector('pre');
    const verse = verseChoose.value;
    const verses = verse.replace(" ", "").toLowerCase();
    const url = verses + '.txt';
    const link='https://raw.githubusercontent.com/mdn/learning-area/master/javascript/apis/fetching-data/';
    const data = fetch(link+url);
    data
      .then(response=>response.text())
      .then(text=>
      { poemDisplay.textContent = text;})
      .catch(err=>
      {
        console.error(err);
      })
    ;
  }

  render() {

    return (
      <div className="App">
        <h1>
          <strong>POEMs for YOU</strong>
        </h1>
        <form onChange={this.onChange}>
          <label htmlFor="verse-choose">Choose a verse</label>
          <select id="verse-choose" name="verse-choose" >
            <option >Verse 1</option>
            <option>Verse 2</option>
            <option>Verse 3</option>
            <option>Verse 4</option>
          </select>
        </form>
        <pre>
        </pre>

      </div>
    )
  }
}

export default Poem;

