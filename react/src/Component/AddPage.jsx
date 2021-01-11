import React, { Component } from 'react';
import TransactionConnector from '../Connector/TransactionConnector';

class AddPage extends Component {
    
    constructor(props){
        super(props)

        this.state={
            transactions:[

            ]

        }
    }
    changeName= (event) =>{
        this.setState({name:event.target.value});
    }
    changeProduct= (event) =>{
        this.setState({product:event.target.value});
    }
    changePrice= (event) =>{
        this.setState({price:event.target.value});
    }

    save = (e) => {
        e.preventDefault();
        let trans = {name: this.state.name, product: this.state.product, price: this.state.price};
        console.log(trans);
        TransactionConnector.addTransaction(trans).then((res) => {
            this.props.history.push('/')
        });
    }
    
    render() {
        return (
            <div>
                <form className="head-form">
                     <div className = "form-group">
                            <label> Name: </label>
                            <input placeholder="Name" name="firstName" className="form-control" 
                                  value={this.state.name}  onChange={this.changeName}/>
                    </div>
                    <div className = "form-group">
                            <label> Product: </label>
                            <input placeholder="Product" name="lastName" className="form-control" 
                                   value={this.state.product} onChange={this.changeProduct} />
                    </div>
                    <div className = "form-group">
                            <label> Price: </label>
                            <input placeholder="Price" name="emailId" className="form-control" 
                                    value={this.state.price} onChange={this.changePrice}/>
                    </div>
                  <button className="btn btn-success" onClick={this.save}>Save</button>
                 </form>
            </div>
        );
    }
}

export default AddPage;