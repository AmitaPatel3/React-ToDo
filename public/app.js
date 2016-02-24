var TodoList = React.createClass({
  render: function() {
    var todosList = this.props.todos.map(function(t) {
      return (
        <div className="panel panel-default">
          <div className="panel-header">
            TODO NAME
            <h3> { t.name } </h3>
          </div>

          <div className="panel-body">
           TODO DESCRIPTION
           <h3> { t.description } </h3>
          </div>

          <div className="panel-footer">
          TODO DUE DATE
          <h3> { t.dueDate } </h3>
          </div>
        </div>
        )
    })

    return (
      <div>
        <p> { todosList } </p>
       </div>
    )
  }
});

var App = React.createClass ({

  getInitialState: function() {
    return{
      todos: []
    }
  },

  loadTodosFromServer: function() {

    $.ajax({
      url: '/api/todos',
      method: 'GET'
      }).done(function(data) {
        this.setState({
        todos: data
      })
    }.bind(this));
  },

  componentDidMount: function() {
    this.loadTodosFromServer();
  },

    render: function() {
      return (
        <div>
          <h3> Hello World! </h3>
          <TodoList todos={ this.state.todos }/>
          </div>
        )
    }
});



React.render(<App/>, document.getElementById('app'));