import './App.css';
import {Header}  from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

import {GlobalProdiver} from './context/GlobalState';

function App() {
  return (
    <GlobalProdiver>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProdiver>
  );
}

export default App;
