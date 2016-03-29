var React = require('react');

var PromptContainer = React.createClass({
	render: function() {
		return (
			<div>
				<h1>player</h1>
				<div>
					<form>
						<div>
							<input type="text" placeholder="ghub" />
						</div>
						<div>
							<button type="submit" class="btn btn-default">GOGOGO</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = PromptContainer;