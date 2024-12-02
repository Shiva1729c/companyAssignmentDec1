import './index.css'

const ActionLauncher = () => {
  const renderActionButtons = () => (
    <div>
      <button type="button" className="action-btn">
        Add Action
      </button>
      <button type="button" className="action-btn">
        Fee Reversal
      </button>
      <button type="button" className="action-btn">
        Retail Onboarding
      </button>
      <button type="button" className="action-btn">
        Address Update
      </button>
    </div>
  )
  return (
    <div className="action-launcher-container">
      <p className="action-title">Action Launcher</p>
      <div className="search-container">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733108217/search_akkxqe.png"
          alt=""
          className=""
        />
        <input
          type="search"
          placeholder="Search actions..."
          className="search-input"
        />
      </div>
      {renderActionButtons()}
    </div>
  )
}

export default ActionLauncher
