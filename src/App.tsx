import React, { ChangeEvent, FormEvent } from 'react';
import TodoList from './TodoList';



interface Props {
}

interface State {
  todos: Array<string>;
  value: string;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
    };

  }

  handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { todos, value }: State = this.state;
    const newItems = [...todos, value];
    this.setState({
      todos: newItems,
      value: "",
    });
  }

  handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    });
  }



  render() {
    return (
      <div>
        <p>Todoリスト</p>
        <TodoList todos={this.state.todos} />
        <input type="text" value={this.state.value} onChange={this.handleChangeValue} />
        <button type="submit" onClick={this.handleClick}>追加</button>
      </div>
    );
  }
}

export default App;