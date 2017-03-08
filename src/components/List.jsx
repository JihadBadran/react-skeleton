var React = require("react");
var ListItem = require("./ListItem.jsx");

var List = React.createClass({
    render: function(){
        var listItems = this.props.ingredients.map(function(item){
            return <ListItem ingredient={item} />
        });
        
        return(
            <ul className="list-group">
                {listItems}
            </ul>
        );
    }
});

module.exports = List;