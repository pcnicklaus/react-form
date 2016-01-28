var React = require('react');

// could also do this
// module.exports = React.createClass...

var EmailField = React.createClass({
   render: function ()
      return (
         <div className="form-group">
            <input className="form-control" onChange={this.onChange}>
            </div>
            );
         }
});

module.exports = EmailField;
