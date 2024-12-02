import './index.css'

const InteractionTabs = () => (
  <ul className="interaction-tabs-container">
    <li className="tabs-text-container active-tab-item">
      <p className="tabs-text active-tab">Conversation</p>
    </li>
    <li className="tabs-text-container with-cross">
      <p className="tabs-text">Address Update</p>
      <img
        src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733071937/icon112_bqaf5j.png"
        alt="cross"
        className="cross"
      />
    </li>
    <li className="tabs-text-container with-cross">
      <p className="tabs-text">Fee Reversal</p>
      <img
        src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733071937/icon112_bqaf5j.png"
        alt="cross"
        className="cross"
      />
    </li>
    <li className="tabs-text-container">
      <p className="tabs-text retail">Retail Onboarding</p>
    </li>
    <button type="button" className="escalate-button">
      Escalate
    </button>
  </ul>
)

export default InteractionTabs
