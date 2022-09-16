import './index.css'

const CapitalItems = props => {
  const {eachCapital, showCountryName} = props
  const {capitalDisplayText, country, id} = eachCapital

  const onchaneContry = () => {
    showCountryName(country)
  }

  return (
    <option value={id} onChange={onchaneContry} className="select-cont">
      {capitalDisplayText}
    </option>
  )
}
export default CapitalItems
