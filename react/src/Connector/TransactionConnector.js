import axios from 'axios';

const TRANSACTION_BASE_URL= "http://localhost:8080"

class TransactionConnector{
    
    getTransactions(){
        return axios.get(TRANSACTION_BASE_URL);
    }

    addTransaction(trans){
        return axios.post(TRANSACTION_BASE_URL + '/add', trans);
    }
}

export default  new TransactionConnector() 