var React = require("react");
var ReactDOM = require("react-dom");

var List = require("./components/List.jsx");

var Screen = React.createClass({
    getInitialState: function(){
        return {items:[], newItemText:''};
    },
    handleSubmit:function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items:currentItems, newItemText:""});
    },
    onChange:function(e){
        this.setState({newItemText:e.target.value});
    },
    render: function(){
        return(
            <div className="col-lg-4 panel panel-default">
                <div className="panel-heading">
                    <h1>{this.props.title}</h1>
                </div>
                
                <div className="">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.onChange} type="text" value={this.state.newItemText} />
                        <List ingredients={this.state.items}/>
                    </form>    
                </div>
                
            </div>
        );
    }
});
ReactDOM.render(<Screen title="Ingredients"/>, document.getElementById("render"));