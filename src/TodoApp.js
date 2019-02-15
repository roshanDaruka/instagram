import React, { Component } from 'react';
import './TodoApp.css';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      tDB: {},
      datastore: null,
      name: '',
      todos: [],
      showTodos: false,
      showNameForm: true
    };
  }

  componentDidMount() {
    if (!('indexedDB' in window)) {
      alert("This browser doesn't support IndexedDB");
    } else {
      this.open();
    }
  }

  open = () => {
    let version = 1;
    let request = indexedDB.open('todos', version);
    request.onupgradeneeded = e => {
      let db = e.target.result;
      e.target.transaction.onerror = this.state.tDB.onerror;
      if (db.objectStoreNames.contains('todos')) {
        db.deleteObjectStore('todos');
      }
      const store = db.createObjectStore('todos', {
        keyPath: 'name'
      });
      store.put({
        name: 'roshan',
        todos: [
          {
            text: 'lets finish this todo list',
            timestamp: new Date().getTime()
          }
        ]
      });
    };

    request.onsuccess = e => {
      this.setState({ datastore: e.target.result });
      if (this.state.name.length > 0) {
        this.fetchTodos();
      }
    };

    request.onerror = e => {
      console.log('[onerror]', request.error);
    };
  };

  fetchTodos = () => {
    let db = this.state.datastore;
    let transaction = db.transaction(['todos'], 'readonly');
    let objStore = transaction.objectStore('todos');
    let keyRange = IDBKeyRange.lowerBound(0);
    let cursorRequest = objStore.openCursor(keyRange);
    let todos = [];
    const self = this;
    transaction.oncomplete = function(e) {
      const nickTodos = todos.find(element => element.name === self.state.name);
      console.log(nickTodos);
      self.setState({ todos: (nickTodos && nickTodos.todos) || [] });
    };
    cursorRequest.onsuccess = function(e) {
      let result = e.target.result;
      if (!!result === false) {
        return;
      }
      todos.push(result.value);
      result.continue();
    };

    cursorRequest.onerror = e => {
      console.log(e);
    };
  };

  createTodos = (text, nick) => {
    let db = this.state.datastore;
    let transaction = db.transaction(['todos'], 'readwrite');
    let objStore = transaction.objectStore('todos');
    let timestamp = new Date().getTime();
    let todo = {
      text: text,
      timestamp: timestamp
    };
    let todos = [];
    let t;
    if (todos) {
      t = this.state.todos;
      t.push(todo);
    }
    const newData = {
      name: this.state.name,
      todos: t
    };
    let request = objStore.put(newData, nick);
    const self = this;
    request.onsuccess = e => {
      self.fetchTodos();
    };

    request.onerror = e => {
      console.log(e);
    };
  };

  deleteTodo = id => {
    let db = this.state.datastore;
    let transaction = db.transaction(['todos'], 'readwrite');
    let objStore = transaction.objectStore('todos');
    let todos = [];
    let t;
    if (todos) {
      t = this.state.todos;
      t = t.filter(element => element.timestamp !== id);
    }
    const newData = {
      name: this.state.name,
      todos: t
    };
    let request = objStore.put(newData);
    const self = this;
    request.onsuccess = function(e) {
      self.fetchTodos();
    };

    request.onerror = function(e) {
      console.log(e);
    };
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let text = this.state.todo;
    if (text.replace(/ /g, '') !== '') {
      this.createTodos(text);
    }
    this.setState({ todo: '' });
  };

  handleNameSubmit = e => {
    e.preventDefault();
    this.fetchTodos(this.state.name);
    this.setState({ showTodos: true, showNameForm: false });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleCheckBox = e => {
    let id = parseInt(e.target.getAttribute('data-id'));
    this.deleteTodo(id);
  };

  render() {
    return (
      <div className="page-wrapper">
        {this.state.showNameForm && (
          <form className="name-form" onSubmit={this.handleNameSubmit}>
            <label htmlFor="user-name" className="label">
              Please Enter Your Name
            </label>
            <input
              type="text"
              name="user-name"
              onChange={this.handleNameChange}
              value={this.state.name}
              placeholder="Enter your name..."
              className="name-input"
            />
            <input type="submit" className="submit-button" value="Submit" />
          </form>
        )}
        {this.state.showTodos && (
          <div>
            <form className="name-form" onSubmit={this.handleFormSubmit}>
              <label htmlFor="new-todo">Enter todo</label>
              <input
                type="text"
                name="new-todo"
                onChange={this.handleChange}
                value={this.state.todo}
                placeholder="Enter a todo item..."
                required
                className="name-input"
              />
              <input type="submit" className="submit-button" value="Submit" />
            </form>
            <ul id="todo-items">
              {this.state.name &&
                this.state.todos &&
                this.state.todos.length > 0 &&
                this.state.todos.map(todo => (
                  <li key={todo.timestamp}>
                    <button
                      onClick={this.handleCheckBox}
                      className="todo-button"
                      data-id={todo.timestamp}
                    >
                      {' '}
                      delete
                    </button>
                    <p className="inline">{todo.text}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default TodoApp;
