import React from 'react';
import { connect } from 'react-redux';
import { lastNameInput } from '../actions';

class LastNames extends React.Component {
  onChange = (e) => {
    this.props.lastNameInput(e.target.value, e.target.id);
  }
  render() {
    return (
        <ul className='list'>
          <li className="list__column-letter">
            C
          </li>
          <li className="list__header">
            Efternamn
          </li>
          <li className='list__item'>
            <input
              id={this.props.inputNames['person1'].id}
              value={this.props.inputNames['person1'].lastname}
              onChange={this.onChange}

            />
          </li>
          <li className='list__item'>
            <input
              id={this.props.inputNames['person2'].id}
              value={this.props.inputNames['person2'].lastname}
              onChange={this.onChange}
            />
          </li>
          <li className='list__item'>
            <input
              id={this.props.inputNames['person3'].id}
              value={this.props.inputNames['person3'].lastname}
              onChange={this.onChange}

            />
          </li>
          <li className='list__item'>
            <input
              id={this.props.inputNames['person4'].id}
              value={this.props.inputNames['person4'].lastname}
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
  lastNameInput: (text, id) => dispatch(lastNameInput(text, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LastNames);
