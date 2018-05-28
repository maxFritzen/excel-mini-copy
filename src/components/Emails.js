import React from 'react';
import { connect } from 'react-redux';
import { emailInput } from '../actions';

class Emails extends React.Component {
  onChange = (e) => {
    this.props.emailInput(e.target.value, e.target.id);
  }
  render() {
    const originalNames =  this.props.originalNames;
    return (
      <ul className='list'>
        <li className="list__column-letter">
          D
        </li>
        <li className="list__header">
          Email (firstname.lastname@email.com)
        </li>
        {originalNames.map((item, index) => {
          return (
            <li key={index + 'email'} className='list__item'>
             <input
               id={this.props.inputNames[`person${index + 1}`].id}
               value={this.props.inputNames[`person${index + 1}`].email}
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
});

const mapDispatchToProps = (dispatch) => ({
  emailInput: (text, id) => dispatch(emailInput(text, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
