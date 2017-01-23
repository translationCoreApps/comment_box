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
    this.props.commentBoxStore['currentChanges'] = value;
    currentCheck.comment = value;
    this.props.updateCurrentCheck(currentCheck);
  }

  togglePanel(){
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <View
        open={this.state.open}
        comment={this.state.comment}
        togglePanel={this.togglePanel.bind(this)}
        handleComment={this.handleComment.bind(this)}
      />
    );
  }
}

module.exports = {
  container: CommentBox,
  name: NAMESPACE
}
