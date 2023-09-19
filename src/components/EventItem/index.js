import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails
  const changeActiveEvent = () => {
    setActiveEventId(id)
  }
  return (
    <li>
      <button type="button" onClick={changeActiveEvent}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
