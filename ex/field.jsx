import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                {/* this.props.changeValue só está disponível pois foi feito o mapDispatchToProps que faz o bind da function com as props.
                Automaticamente, a action que está em fieldActions.jsx fica disponível nas props.
                */}
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)