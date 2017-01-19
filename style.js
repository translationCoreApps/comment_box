var style = {
  width: {
    width:'100%'
  },

  panelBackgroundColor:{
    backgroundColor: "#D3D3D3"
  },

  background: {
    backgroundColor: "#D3D3D3",
    margin: "0px 0px 10px",
    padding: "10px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  sideline: {
    content: '',
    position: "absolute",
    top: "0px", bottom: "0px", left: "0px",
    width: "60px",
    background: "radial-gradient(#575450 6px, transparent 7px) repeat-y",
    backgroundSize: "30px 30px",
    borderRight: "3px solid #D44147",
    boxSizing: "border-box",
},

  paper:{
    position: "relative",
    width: "280px",
    maxWidth: "100%",
    minWidth: "100%",
    height: "100%",
    marginTop: "0px",
    background: "#fafafa",
    boxShadow: "0px 2px 8px rgba(0,0,0,.3)",
    overflow: "hidden",
  },

  paperContent:{
    position: "absolute",
    top: "30px",
    right: "0px",
    bottom: "30px",
    left: "60px",
    background: "linear-gradient(transparent, transparent 28px, #91D1D3 28px)",
    backgroundSize: "30px 30px",
  },

  textarea: {
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    maxHeight: "100%",
    lineHeight: "30px",
    padding: "0px 10px",
    border: "0px",
    outline: "0px",
    background: "transparent",
    color: "black",
    fontSize: "18px",
    boxSizing: "border-box",
    zIndex: "1",
  },

  CommentButton: {
    width: "100%",
    borderRadius: "0%",
    color: "#fff",
    background: "#333333",
    borderColor: "#000",
    textAlign: "left",
    paddingLeft: "20px",
    outline: "none",
  },

  chevronGlyphicons:{
    fontSize: "20px",
    float: "right"
  },

  commentGlyphicons:{
    marginLeft: "10px",
    fontSize: "20px"
  },

  commentPanel:{
    padding: "0px",
  },


};



module.exports = style;
