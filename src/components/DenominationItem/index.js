import './index.css'

const DenominationItem = props => {
  const {eachItem, onBalanceClick} = props
  const {value} = eachItem
  const onBalance = () => {
    onBalanceClick(value)
  }
  return (
    <li className="list">
      <button type="button" className="button" onClick={onBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
