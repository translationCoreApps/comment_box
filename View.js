//View.js//

const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Glyphicon, Button, Panel} = RB;
const style = require('./style');

const NAMESPACE = 'CommentBox';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentCheck.comment){
      this.setState({comment: nextProps.currentCheck.comment});
    }else {
      this.setState({comment: ""});
    }
  }

  handleComment(e) {
    let currentCheck = this.props.currentCheck;
    let value = e.target.value;
    this.setState({comment: e.target.value});
    api.getDataFromCheckStore(NAMESPACE)['currentChanges'] = value;
    currentCheck.comment = value;
  }

  render() {
    const chevron = this.state.open ?
      <Glyphicon glyph="menu-up" style={style.chevronGlyphicons}/> :
      <Glyphicon glyph="menu-down" style={style.chevronGlyphicons}/>;
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}
                style={style.CommentButton}>
          <span style={{marginLeft: "0px", textShadow: "none"}}>Make a comment</span>
          <Glyphicon glyph="comment" style={style.commentGlyphicons}/>
          {chevron}
        </Button>
        <Panel collapsible expanded={this.state.open} style={style.commentPanel}>
        <div style={{margin: "-15px"}}>
          <div style={style.paper}>
          <div style={style.sideline}></div>
            <div style={style.paperContent}>
              <textarea autofocus style={style.textarea} placeholder="Notes"
                        value={this.state.comment}
                        onChange={this.handleComment.bind(this)} />
            </div>
          </div>
        </div>
        </Panel>
      </div>
    );
  }
}

module.exports = {
    name: "CommentBox",
    view: CommentBox
}
