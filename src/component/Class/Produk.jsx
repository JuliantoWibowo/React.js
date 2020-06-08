import React ,{ Component } from 'react'

import './CSS/Produk.css'
class Produk extends Component {
    constructor(props){
        super(props)

        this.state = {
            stock: this.props.stock,
            sub : "Beli",
            status: "Tersedia",
            disabled : false
        }
    }
    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status: "Habis",
                disabled: true

            })
        }
    }

    render(){
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="data:image/jpeg;base64,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" alt=""/>
                <p><b>Rp. {this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>

            </div>
        )
    }
}

export default Produk