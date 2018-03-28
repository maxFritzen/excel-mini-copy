import React from 'react';
import { connect } from 'react-redux';
import { firstNameInput } from '../actions';

class FirstNames extends React.Component {
  onChange = (e) => {
    this.props.firstNameInput(e.target.value, e.target.id);
  }
  render() {
    const originalNames =  this.props.originalNames;
    return (
      <ul className='list'>
        <li className="list__column-letter">
          B
        </li>
        <li className="list__header">
          Förnamn
        </li>
        {originalNames.map((item, index) => {
          return (
            <li key={index + 'firstname'} className='list__item'>
             <input
               id={this.props.inputNames[`person${index + 1}`].id}
               value={this.props.inputNames[`person${index + 1}`].firstname}
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
  firstNameInput: (text, id) => dispatch(firstNameInput(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstNames);
