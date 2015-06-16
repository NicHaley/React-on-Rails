var CommentList = React.createClass({
	render: function() {
		return (
			<div className="comment-list">
				<Comment />
			</div>
		);
	}
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2>Test Author</h2>
				<p>lorem ipusem lorem isdfs sdf sd fjlsdf sd</p>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<form>
				<input type="text" placeholder="Your name" />
				<input type="text" placeholder="Say something..." />
				<input type="submit" value="Submit" />
			</form>
		);
	}
});

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="comment-box">
				<CommentForm />
				<CommentList />
			</div>
		);
	}
});

comments = 
[
    {
        "author": "Pete Hunt",
        "text": "Hey there!"
    }
]

$(function() {
	React.render(<CommentBox />, document.getElementById('content'));
})