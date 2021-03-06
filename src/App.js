import './App.css';
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import { useEffect } from 'react'
import {fetchTodo} from './actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {
  useEffect(()=>{
    props.fetchTodo()
}, [props.fetchTodo])
  return (
    <div className="App">
      <ToDoForm />
      {props.isLoading ? "TODO LIST IS LOADING" : "TODO LIST LOADED" }
      <ToDoList />
      {props.error !== "" ? props.error : ""}
    </div>
  );
}

export default connect(mapStateToProps, {fetchTodo})(App)