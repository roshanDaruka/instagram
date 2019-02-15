import React, { Component } from 'react';
import './TodoApp.css';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      tDB: {},
      datastore: null,
      name: ''
    };
  }

  componentDidMount() {
    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB");
    } else {
      // this.open(this.refreshTodos);
    }
  }

  refreshTodos = nick => {
    debugger;
    this.fetchTodos(todos => {
      let todoList = document.getElementById('todo-items');
      todoList.innerHTML = '';

      for (let i = 0; i < todos.length; i++) {
        let todo = todos[todos.length - 1 - i];

        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.setAttribute('data-id', todo.timestamp);

        li.appendChild(checkbox);

        let span = document.createElement('span');
        span.innerHTML = todo.text;

        li.appendChild(span);

        todoList.appendChild(li);

        checkbox.addEventListener('click', e => {
          let id = parseInt(e.target.getAttribute('data-id'));
          this.deleteTodo(id, nick, this.refreshTodos);
        });
      }
    }, nick);
  };

  open = (callback, nick) => {
    debugger;
    let version = 1;
    let request = indexedDB.open('todos', version);

    request.onupgradeneeded = e => {
      let db = e.target.result;

      e.target.transaction.onerror = this.state.tDB.onerror;

      if (db.objectStoreNames.contains(nick)) {
        db.deleteObjectStore(nick);
      }

      db.createObjectStore(nick, {
        keyPath: 'timestamp'
      });
    };

    request.onsuccess = e => {
      this.setState({ datastore: e.target.result });
      callback(nick);
    };

    request.onerror = this.state.tDB.onerror;
  };

  fetchTodos = (callback, nick) => {
    debugger;
    let db = this.state.datastore;
    let transaction = db.transaction(['todos'], 'readwrite');
    let objStore = transaction.objectStore(nick);
    let todosStore = objStore.get('todos');
    let keyRange = IDBKeyRange.lowerBound(0);
    let cursorRequest = todosStore.openCursor(keyRange);
    let todos = [];

    transaction.oncomplete = function(e) {
      callback(todos);
    };

    cursorRequest.onsuccess = function(e) {
      let result = e.target.result;

      if (!!result == false) {
        return;
      }

      todos.push(result.value);

      result.continue();
    };

    cursorRequest.onerror = this.state.tDB.onerror;
  };

  createTodos = (text, nick, callback) => {
    debugger;
    let db = this.state.datastore;
    console.log(db);
    let transaction = db.transaction(['todo'], 'readwrite');

    let objStore = transaction.objectStore(nick);

    let timestamp = new Date().getTime();

    let todo = {
      text: text,
      timestamp: timestamp
    };

    let request = objStore.put(todo);

    request.onsuccess = e => {
      callback(todo);
    };

    request.onerror = this.state.tDB.onerror;
  };

  deleteTodo = (id, nick, callback) => {
    debugger;
    let db = this.state.datastore;
    let transaction = db.transaction(['todo'], 'readwrite');
    let objStore = transaction.objectStore('nick');

    let request = objStore.delete(id);

    request.onsuccess = function(e) {
      callback();
    };

    request.onerror = function(e) {
      console.log(e);
    };
  };

  handleFormSubmit = e => {
    let text = this.state.todo;
    let name = this.state.name;
    if (text.replace(/ /g, '') !== '') {
      this.createTodos(text, name, todo => {
        this.refreshTodos(name);
      });
    }

    this.setState({ text: '' });
    e.preventDefault();
  };

  handleNameSubmit = e => {
    let name = this.state.name;
    console.log();
    debugger;
    this.open(this.refreshTodos, name);
    e.preventDefault();
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  render() {
    return (
      <div id="page-wrapper">
        <form onSubmit={this.handleNameSubmit}>
          <input
            type="text"
            name="user-name"
            id="user-name"
            onChange={this.handleNameChange}
            value={this.state.name}
            placeholder="Enter your name..."
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="new-todo"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.todo}
            placeholder="Enter a todo item..."
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <ul id="todo-items" />
      </div>
    );
  }
}

export default TodoApp;
