const RegistrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getActiveRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You have already registered for the event</p>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )
  const renderActiveRegistrationsDetails = () => {
    switch (getActiveRegistrationStatus) {
      case RegistrationStatus.yetToRegister:
        return renderYetToRegister()

      case RegistrationStatus.registered:
        return renderRegistrationsClosed()
      case RegistrationStatus.registrationsClosed:
        return renderRegistered()
      default:
        return renderNoActiveEventView()
    }
  }

  return <div>{renderActiveRegistrationsDetails()}</div>
}
export default ActiveEventRegistrationDetails
