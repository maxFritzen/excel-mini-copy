import React from 'react';
import { connect } from 'react-redux';

class Instructions extends React.Component {
  render() {
    return (
        <ol className='instructions'>
          Lös nedanstående uppgifter med hjälp av autofyll-funktionen
          <li
            className={this.props.instructions['inst1'].done ? 'instructions__item--crossed' : 'instructions__item'}
            >
            {this.props.instructions['inst1'].text}
          </li>
          <li
            className={this.props.instructions['inst2'].done ? 'instructions__item--crossed' : 'instructions__item'}
            >
            {this.props.instructions['inst2'].text}
          </li>
          <li className={this.props.instructions['inst3'].done ? 'instructions__item--crossed' : 'instructions__item'}
            >
            {this.props.instructions['inst3'].text}
          </li>
        </ol>
    );
  }
}

const mapStateToProps = (state) => ({
  instructions: state.instructions
});

export default connect(mapStateToProps)(Instructions);
