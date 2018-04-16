import React from 'react';
import { connect } from 'react-redux';
import { fillFirstNames, fillLastNames, fillEmails, done } from '../actions';
import OriginalNames from './OriginalNames';
import FirstNames from './FirstNames';
import LastNames from './LastNames';
import Emails from './Emails';

class Grid extends React.Component {

  // checkDone = (instructionId) => {
  //   // Välj rätt namntyp att fylla i, kan vara flera.
  //   if (instructionId === 'inst1'){
  //     this.props.fillFirstNames(this.props.originalNames);
  //     this.props.done('inst1');
  //   }
  //   if (instructionId === 'inst2'){
  //     this.props.fillLastNames(this.props.originalNames);
  //     this.props.done('inst2');
  //   }
  //   if (instructionId === 'inst3'){
  //     this.props.fillEmails(this.props.originalNames);
  //     this.props.done('inst3');
  //   }
  //
  // }
  // checkFirstNames = (id, i) => {
  //   if (this.props.inputNames[id].firstname === this.props.originalNames[i].firstname) {
  //     return this.checkDone('inst1');
  //   }
  // }
  // checkLastNames = (id, i) => {
  //   if (this.props.inputNames[id].lastname === this.props.originalNames[i].lastname) {
  //     return this.checkDone('inst2');
  //   }
  // }
  // checkEmail = (id, i) => {
  //   if (this.props.inputNames[id].email === this.props.originalNames[i].email) {
  //     return this.checkDone('inst3');
  //   }
  // }
  // autoFill = () => {
  //   // ifall krav stämmer: dispatch DONE-action för rätt instruktion.
  //   // ska actionen kolla kraven eller kolla krav här?
  //   // Är inte superkrångligt att ändra i efterhand.
  //   // Kör här.
  //   // kanske kolla krav i en annan function?
  //   const length = this.props.originalNames.length;
  //   for(let i = 0; i < length; i++) {
  //     const id = `person${i + 1 }`;
  //     this.checkFirstNames(id, i);
  //     this.checkLastNames(id, i);
  //     this.checkEmail(id, i);
  //   }
  // }
  render() {
    return (
      <div>

        {/* <button onClick={this.autoFill}>autoFill</button> */}
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
