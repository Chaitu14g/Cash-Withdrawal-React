import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onBalanceClick = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="background_container">
        <div className="name_container">
          <p className="para">{initial}</p>
          <h1 className="heading">{name}</h1>
        </div>
        <div className="balance_container">
          <p className="yourBalance_para align_yourBalance_para">
            Your Balance
          </p>
          <p className="balance_amount left_para">
            {balance}
            <br />
            <span className="balance_amount_text">In Rupees</span>
          </p>
        </div>
        <p className="balance_amount">Withdraw</p>
        <p className="yourBalance_para">CHOOSE SUM (IN RUPEES)</p>
        <ul className="unList">
          {denominationsList.map(eachItem => (
            <DenominationItem
              key={eachItem.id}
              eachItem={eachItem}
              onBalanceClick={this.onBalanceClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
