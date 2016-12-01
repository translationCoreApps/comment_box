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

  componentWillMount() {
    if (typeof this.props.val == "string") {
      this.setState({comment: this.props.val});
      api.getDataFromCheckStore(NAMESPACE)['currentChanges'] = this.props.val;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.val == "string") {
      this.setState({comment: nextProps.val});
      api.getDataFromCheckStore(NAMESPACE)['currentChanges'] = nextProps.val;
    }
  }

  handleComment(e) {
    this.setState({comment: e.target.value});
    api.getDataFromCheckStore(NAMESPACE)['currentChanges'] = e.target.value;
  }

  // these next two functions will be used through a ref
  getComment() {
    return api.getDataFromCheckStore(NAMESPACE, 'currentChanges');
  }

  setComment(comment = "") {
    this.setState({comment: comment});
    api.putDataInCheckStore(NAMESPACE, "currentChanges", comment);
  }

  render() {
    const chevron = this.state.open ?
      <Glyphicon glyph="menu-up" style={style.chevronGlyphicons}/> :
      <Glyphicon glyph="menu-down" style={style.chevronGlyphicons}/>;
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}
                style={style.CommentButton}>
          <span style={{marginLeft: "20px"}}>Make a comment</span>
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
