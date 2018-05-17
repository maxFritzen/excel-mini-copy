import React from 'react';
import { connect } from 'react-redux';
import { fillFirstNames, fillLastNames, fillEmails, done } from '../actions';
import OriginalNames from './OriginalNames';
import FirstNames from './FirstNames';
import LastNames from './LastNames';
import Emails from './Emails';

class Grid extends React.Component {

  render() {
    return (
      <div>
        <div className="grid">
          <OriginalNames
            names={this.props.originalNames}
          />
           <FirstNames />
           <LastNames />
           <Emails />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  inputNames: state.inputNames,
  originalNames: state.originalNames
});

const mapDispatchToProps = (dispatch) => ({
  fillFirstNames: (array) => dispatch(fillFirstNames(array)),
  fillLastNames: (array) => dispatch(fillLastNames(array)),
  fillEmails: (array) => dispatch(fillEmails(array)),
  done: (instructionId) => dispatch(done(instructionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
