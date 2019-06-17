import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} value={props.counter.step} type='number' />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

//lembrar que sempre tem return em arrow functions conforme exemplo abaixo.
//retorna um objeto com atributo "counter"
//mapeia o state do componente para props.
const mapStateToProps = state => ({ counter: state.counter })


//mapeia as actions para props
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ inc, dec, stepChanged }, dispatch)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
