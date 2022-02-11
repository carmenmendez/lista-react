import PropTypes from 'prop-types'

function TodosCounter({ count }) {
    return <p>Por hacer: {count}</p>
}

TodosCounter.propTypes = {
    count: PropTypes.number.isRequired
}

export default TodosCounter