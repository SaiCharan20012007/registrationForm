// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    emptyTriggerd1: false,
    emptyTriggerd2: false,
    issubmit: false,
    firstname: '',
    lastname: '',
  }

  changeFirstname = event => {
    if (event.target.value === '') {
      this.setState({emptyTriggerd1: true})
    } else {
      this.setState({firstname: event.target.value})

      this.setState({emptyTriggerd1: false})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({issubmit: true})
    } else if (firstname === '' && lastname === '') {
      this.setState({emptyTriggerd1: true})

      this.setState({emptyTriggerd2: true})
    } else if (firstname === '' && lastname !== '') {
      this.setState({emptyTriggerd1: true})
    } else if (firstname !== '' && lastname === '') {
      this.setState({emptyTriggerd2: true})
    }
  }

  changeLastname = event => {
    if (event.target.value === '') {
      this.setState({emptyTriggerd2: true})
    } else {
      this.setState({emptyTriggerd2: false})
      this.setState({lastname: event.target.value})
    }
  }

  anotherResponse = () => {
    this.setState({issubmit: false})
    this.setState({firstname: ''})
    this.setState({lastname: ''})
  }

  render() {
    const {
      emptyTriggerd1,
      emptyTriggerd2,

      issubmit,
    } = this.state

    const errMsg1 = emptyTriggerd1 ? 'Required' : ''
    const errMsg2 = emptyTriggerd2 ? 'Required' : ''

    const sty = emptyTriggerd1 ? 'inputEl2' : 'inputEl'
    const sty2 = emptyTriggerd2 ? 'inputEl2' : 'inputEl'

    const successContent = (
      <div className="submit-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button
          type="button"
          className="submit-btn"
          onClick={this.anotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    )

    const formContent = (
      <form onSubmit={this.submitForm}>
        <label htmlFor="firstnameid">FIRST NAME</label>
        <input
          type="text"
          className={sty}
          placeholder="First name"
          id="firstnameid"
          onBlur={this.changeFirstname}
        />
        <p className="errorMsg">{errMsg1}</p>
        <label htmlFor="lastnameid">LAST NAME</label>
        <input
          type="text"
          className={sty2}
          placeholder="Last name"
          id="lastnameid"
          onBlur={this.changeLastname}
        />
        <p className="errorMsg">{errMsg2}</p>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )

    const displayContent = issubmit ? successContent : formContent

    return (
      <div className="bg-container">
        <h1 className="title">Registration</h1>
        <div className="card">{displayContent}</div>
      </div>
    )
  }
}

export default RegistrationForm
