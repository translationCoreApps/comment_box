//Container.js//

const api = window.ModuleApi;
const React = api.React;
const RB = api.ReactBootstrap;
const {Glyphicon, Button, Panel} = RB;
const View = require('./View.js');

const NAMESPACE = 'CommentBox';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
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
    let value = e.target.value;
    this.setState({comment: e.target.value});
  }

  handleSaveComment(){
    let currentCheck = this.props.currentCheck;
    let value = this.state.comment;
    this.props.commentBoxStore['currentChanges'] = value;
    currentCheck.comment = value;
    this.props.updateCurrentCheck(currentCheck);
  }

  render() {
    return (
      <View
        comment={this.state.comment}
        handleComment={this.handleComment.bind(this)}
        handleSaveComment={this.handleSaveComment.bind(this)}
      />
    );
  }
}

module.exports = {
  container: CommentBox,
  name: NAMESPACE
}
