var React = require('react');
var validator = require('email-validator')

// could also do this
// module.exports = React.createClass...

var EmailField = React.createClass({
   getInitialState: function () {
      return {valid: true, value: ''}
   },
   onChange: function (event) {
      // grab the value coming from onChange!!!
      var val = event.target.value;

      if (!validator.validate(event.target.value)) {
         this.setState({
            valid: false,
            value: event.target.value
         })
      } else {
         this.setState({
            valid: true, value: event.target.value
         })
      }
   },
   clear: function () {
      this.setState({valid: true, value: ''});
   },
   // never hard code VALUe
   render: function () {
      var formClass = this.state.valid ? "form-group" : "form-group has-error";
      return (
         <div className={formClass}>
            <input
               className="form-control" onChange={this.onChange} placeholder="email..."
               value={this.state.value}
            />
         </div>
      );
   }
});

module.exports = EmailField;
