import React from 'react';
import { connect } from 'react-redux';
import { emailInput } from '../actions';

class Emails extends React.Component {
  onChange = (e) => {
    this.props.emailInput(e.target.value, e.target.id);
  }
  render() {
    return (
      <ul className='list'>
        <li className="list__column-letter">
          D
        </li>
        <li className="list__header">
          Epost (förnamn.efternamn@epost.se)
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person1'].id}
            value={this.props.inputNames['person1'].email}
            onChange={this.onChange}
          />
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person2'].id}
            value={this.props.inputNames['person2'].email}
            onChange={this.onChange}
          />
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person3'].id}
            value={this.props.inputNames['person3'].email}
            onChange={this.onChange}
          />
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person4'].id}
            value={this.props.inputNames['person4'].email}
            onChange={this.onChange}
          />
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  inputNames: state.inputNames
})

const mapDispatchToProps = (dispatch) => ({
  emailInput: (text, id) => dispatch(emailInput(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
