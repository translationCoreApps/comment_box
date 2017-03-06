//View.js//

const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Glyphicon, Button} = RB;
const style = require('./style');

class View extends React.Component {

  render() {
    return (
      <div style={{height: "100%"}}>
        <div style={style.paper}>
          <div style={style.sideline}></div>
            <div style={style.paperContent}>
              <textarea autoFocus style={style.textarea} placeholder="Notes"
                        value={this.props.comment}
                        onChange={this.props.handleComment.bind(this)}
                        onBlur={this.props.handleSaveComment.bind(this)}/>
            </div>
        </div>
      </div>
    );
  }
}

module.exports = View;
