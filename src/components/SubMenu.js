import React from 'react';
import { connect } from 'react-redux';
import { fillFirstNames, fillLastNames, fillEmails, done } from '../actions';

class SubMenu extends React.Component {
  constructor(props){
    super(props);
  }

  checkDone = (instructionId) => {
    // Välj rätt namntyp att fylla i, kan vara flera.
    if (instructionId === 'inst1'){
      this.props.fillFirstNames(this.props.originalNames);
      this.props.done('inst1');
    }
    if (instructionId === 'inst2'){
      this.props.fillLastNames(this.props.originalNames);
      this.props.done('inst2');
    }
    if (instructionId === 'inst3'){
      this.props.fillEmails(this.props.originalNames);
      this.props.done('inst3');
    }

  }
  checkFirstNames = (id, i) => {
    if (this.props.inputNames[id].firstname === this.props.originalNames[i].firstname) {
      return this.checkDone('inst1');
    }
  }
  checkLastNames = (id, i) => {
    if (this.props.inputNames[id].lastname === this.props.originalNames[i].lastname) {
      return this.checkDone('inst2');
    }
  }
  checkEmail = (id, i) => {
    if (this.props.inputNames[id].email === this.props.originalNames[i].email) {
      return this.checkDone('inst3');
    }
  }

  autoFill = () => {
    const length = this.props.originalNames.length;
    for(let i = 0; i < length; i++) {
      const id = `person${i + 1 }`;
      this.checkFirstNames(id, i);
      this.checkLastNames(id, i);
      this.checkEmail(id, i);
    }
  }

  render() {
    return (
      <div className="submenu">

        {this.props.match.params.data == 'file' &&
           <p>FILE</p>
        }
        {this.props.match.params.data == 'home' &&
           <img src="./images/excel-menu-home.png" alt="" />
        }
        {this.props.match.params.data == 'insert' &&
            <p>INSERT</p>
        }
        {this.props.match.params.data == 'page-layout' &&
            <p>PAGE LAYOUT</p>
        }
        {this.props.match.params.data == 'formulas' &&
            <p>FORMULAS</p>
        }
        {this.props.match.params.data == 'data' &&
            <div className="submenu__images">
              <img src="./images/excel-menu-data.png" alt="" className="submenu__image" />
              <img src="./images/excel-flashfill.png" alt="" className="flashfill" onClick={this.autoFill}/>

            </div>
        }
        {this.props.match.params.data == 'review' &&
            <p>REVIEW</p>
        }
        {this.props.match.params.data == 'view' &&
            <p>VIEW</p>
        }
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);
