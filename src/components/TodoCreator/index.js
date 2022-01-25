import PropTypes from 'prop-types'

function TodoCreator(props) {
    return(
        <>
            <input
                type="text" 
                value={props.newTodo} 
                onChange={(event) => {
                    props.onUpdateTodo(event.target.value)
                }}
            />
            <button onClick={props.handleAddTodo}>+</button>
        </>
    )
}

TodoCreator.propTypes = {
    newTodo: PropTypes.string.isRequired,
    onUpdateTodo: PropTypes.func.isRequired,
    handleAddTodo: PropTypes.func.isRequired
}

export default TodoCreator