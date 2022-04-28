import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {

  return (
  <div>
     <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
  </div>
  )
  }

  Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
  }

  Button.defaultProps = {
    color: 'steelblue'
  }
  export default Button