//View.js//

const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Glyphicon, Button, Panel} = RB;
const style = require('./style');

class View extends React.Component {

  render() {
    const chevron = this.props.open ?
      <Glyphicon glyph="menu-up" style={style.chevronGlyphicons}/> :
      <Glyphicon glyph="menu-down" style={style.chevronGlyphicons}/>;
    return (
      <div>
        <Button onClick={this.props.togglePanel.bind(this)}
                style={style.CommentButton}>
          <span style={{marginLeft: "0px", textShadow: "none"}}>Make a comment</span>
          <Glyphicon glyph="comment" style={style.commentGlyphicons}/>
          {chevron}
        </Button>
        <Panel collapsible expanded={this.props.open} style={style.commentPanel}>
        <div style={{margin: "-15px"}}>
          <div style={style.paper}>
          <div style={style.sideline}></div>
            <div style={style.paperContent}>
              <textarea autofocus style={style.textarea} placeholder="Notes"
                        value={this.props.comment}
                        onChange={this.props.handleComment.bind(this)} />
            </div>
          </div>
        </div>
        </Panel>
      </div>
    );
  }
}

module.exports = View;
