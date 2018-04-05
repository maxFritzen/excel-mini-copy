import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoadingPage from './LoadingPage';

// const Button = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/results') }}
//   >
//     Click Me!
//   </button>
// ));

class Instructions extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    const finished = this.props.instructions['inst1'].done && this.props.instructions['inst2'].done && this.props.instructions['inst3'].done;
    if (finished) {
        setTimeout (() => {
          this.props.history.push('/results');
        }, 2000);
    }
    return (
      <div className="instructions">
        <ol className="instructions__list">
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
        {finished && <p>Kalibrerar data</p>}
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  instructions: state.instructions
});

export default withRouter(connect(mapStateToProps)(Instructions));
// export default connect(mapStateToProps)(Instructions);
