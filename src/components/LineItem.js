import React from 'react'
import { connect } from 'react-redux'

const LineItem = ({item}) => {
  return (
    <li>
    <a>
      {item.task}
    </a>
    </li>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(LineItem)