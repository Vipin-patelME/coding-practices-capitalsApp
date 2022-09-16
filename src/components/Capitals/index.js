import {Component} from 'react'
import './index.css'
import CapitalItem from '../CapitalItems'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryName: 'India'}

  showCountryName = country => {
    this.setState({countryName: country})
  }

  render() {
    const {countryName} = this.state
    console.log(countryName)
    return (
      <div className="bg-container">
        <div className="card-cont">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select className="select-cont">
              {countryAndCapitalsList.map(eachCapital => (
                <CapitalItem
                  eachCapital={eachCapital}
                  key={eachCapital.id}
                  showCountryName={this.showCountryName}
                />
              ))}
            </select>
            <p className="capital-paragraph">is capital of which country?</p>
          </div>
          <div className="country-name">
            <p className="capital-paragraph">{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
