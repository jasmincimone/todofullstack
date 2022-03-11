import ToDoItem from './ToDoItem'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    ToDoData: state.ToDoData
})

function ToDoList(props){
    return(
        <>
        {props.ToDoData.map(ToDo =>{
           return( 
            <>
                <ToDoItem ToDo={ToDo} key={ToDo._id}/>
            </>
           )
        })}
        </>
    )
}

export default connect(mapStateToProps, {})(ToDoList)