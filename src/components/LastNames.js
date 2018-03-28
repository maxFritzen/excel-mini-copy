import React from 'react';
import { connect } from 'react-redux';
import { lastNameInput } from '../actions';

class LastNames extends React.Component {
  onChange = (e) => {
    this.props.lastNameInput(e.target.value, e.target.id);
  }
  render() {
    const originalNames =  this.props.originalNames;
    return (
        <ul className='list'>
          <li className="list__column-letter">
            C
          </li>
          <li className="list__header">
            Efternamn
          </li>
          {originalNames.map((item, index) => {
            return (
              <li key={index + 'lastname'} className='list__item'>
               <input
                 id={this.props.inputNames[`person${index + 1}`].id}
                 value={this.props.inputNames[`person${index + 1}`].lastname}
                 onChange={this.onChange}
                 />
               </li>
              )
            }) }
        </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  inputNames: state.inputNames,
  originalNames: state.originalNames
})

const mapDispatchToProps = (dispatch) => ({
  lastNameInput: (text, id) => dispatch(lastNameInput(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LastNames);
