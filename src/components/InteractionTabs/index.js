import './index.css'

const InteractionTabs = () => (
  <ul className="interaction-tabs-container">
    <li className="tabs-text-container">
      <p className="tabs-text">Conversation</p>
    </li>
    <li className="tabs-text-container">
      <p className="tabs-text">Address Update</p>
    </li>
    <li className="tabs-text-container">
      <p className="tabs-text">Fee Reversal</p>
    </li>
    <li className="tabs-text-container">
      <p className="tabs-text">Retail Onboarding</p>
    </li>
    <button type="button">Escalate</button>
  </ul>
)

export default InteractionTabs
