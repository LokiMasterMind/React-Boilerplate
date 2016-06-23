var React = require('react');

var Test=React.createClass({
  render:function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-4 col-md-4">
            <p className="text-align-center">Test Page</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports=Test;
