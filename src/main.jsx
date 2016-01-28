/* three components
1) form component
2) name input
3) email component
*/

var React = require('react');
var ReactDOM = require('react-dom');
var LeadCapture = require('./components/LeadCapture.jsx');

ReactDOM.render(<LeadCapture />, document.getElementById('leadCapture'));
