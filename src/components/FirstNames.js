import React from 'react';
import { connect } from 'react-redux';
import { firstNameInput } from '../actions';

class FirstNames extends React.Component {
  onChange = (e) => {
    this.props.firstNameInput(e.target.value, e.target.id);
  }
  render() {
    return (
      <ul className='list'>
        <li className="list__column-letter">
          B
        </li>
        <li className="list__header">
          Förnamn
        </li>

        <li className='list__item'>
          <input
            id={this.props.inputNames['person1'].id}
            value={this.props.inputNames['person1'].firstname}
            onChange={this.onChange}

          />
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person2'].id}
            value={this.props.inputNames['person2'].firstname}
            onChange={this.onChange}

          />
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person3'].id}
            value={this.props.inputNames['person3'].firstname}
            onChange={this.onChange}

          />
        </li>
        <li className='list__item'>
          <input
            id={this.props.inputNames['person4'].id}
            value={this.props.inputNames['person4'].firstname}
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
  firstNameInput: (text, id) => dispatch(firstNameInput(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstNames);
