import React, { Component } from 'react';
import TransactionConnector from '../Connector/TransactionConnector';



class TransactionsList extends Component {
    
    constructor(props){
        super(props)

        this.state={
            transactions:[]
        }
        this.addTransactions=this.addTransactions.bind(this);
    }

    addTransactions(){
        this.props.history.push('/add')
    }

    componentDidMount(){
        TransactionConnector.getTransactions().then((res) => {
            this.setState({ transactions: res.data})
        });
    }
    
    
    render() {
        return (
            <div className="transactionsList">
                <button className="adder" onClick={this.addTransactions}>Add</button>
                <table className="tablet" >
                <thead className="table_names">
                <tr >
                    <th>Name</th>
                    <th>Product</th> 
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.transactions.map(
                        consumer =>
                        <tr key={consumer.id}>
                            <td>{consumer.name}</td>
                            <td>{consumer.product}</td>
                            <td>{consumer.price}</td>
                        </tr>
                    )
                }    
                </tbody>
                </table> 
            </div>
        );
    }
}

export default TransactionsList;