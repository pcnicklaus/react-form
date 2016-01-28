var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
   onSubmit: function (event) {
      // refs are an id!! grabbing the value from the parent component via refs
      if (!this.refs.fieldEmail.state.valid) {
         alert("you suck at filling out forms! Email is required!!!")
      } else {
         // send request to server or email host
         var httpRequestBody = {
            email: this.refs.fieldEmail.state.value,
            firstName: this.refs.fieldName.state.value
         };
         this.refs.fieldEmail.clear();
         this.refs.fieldName.clear();
      }
   },
   render: function () {
      return (
         <div className="col-sm-3">
            <div className="panel panel-default">
               <div className="panel-body">
               {/*Refs allow us to access those references via the state of the object*/}
                  <NameField type="First" ref="fieldName"/>
                  <br />
                  <EmailField ref="fieldEmail" />
                  <button
                     className="btn btn-primary"
                     onClick={this.onSubmit}
                  >
                     Submit
                  </button>
               </div>
            </div>
         </div>
      );
   }

});

module.exports = LeadCapture;
