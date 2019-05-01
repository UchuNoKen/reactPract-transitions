import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "../css/App.css";

class TransitionComp extends Component {
  state = {
    show: false
  };

  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false
    });
  };

  //   render() {
  //     return (
  //       <div>
  //         <Transition
  //           in={this.state.show}
  //           timeout={{ enter: 2000, exit: 2000 }}
  //           enter={true}
  //           exit={true}
  //           mountOnEnter : div takes up space
  //           unmountOnExit : div is removed from dom, button moves up
  //         >
  //           {state => (
  //             <div
  //               style={{
  //                 background: "cadetBlue",
  //                 height: "100px",
  //                 transition: "all 2s ease",
  //                 opacity: state === "exited" || state === "exiting" ? 0 : 1
  //               }}
  //             >
  //               {state}
  //             </div>
  //           )}
  //         </Transition>
  //         <div className="showDiv" onClick={this.showDiv}>
  //           Show or hide
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  // export default TransitionComp;

  render() {
    return (
      <div>
        <Transition
          in={this.state.show}
          timeout={{ enter: 2000, exit: 50 }}
          enter={true}
          exit={true}
          // mountOnEnter : div takes up space
          // unmountOnExit : div is removed from dom, button moves up
        >
          {state => <div className={`square square-${state}`}>{`square square-${state}`}</div>}
        </Transition>
        <div className="showDiv" onClick={this.showDiv}>
          Show or hide
        </div>
      </div>
    );
  }
}

export default TransitionComp;
