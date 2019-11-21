import React from 'react';


interface Props {
  todos: Array<string>;
}

class TodoList extends React.Component<Props> {


  render() {
    return (
      <ul>
        {this.props.todos.map((todo, i) => (
          <li
            key={i}
          >
            {todo}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;