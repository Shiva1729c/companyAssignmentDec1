import './index.css'

const UserDashboardHeader = () => {
  const renderHederContent = () => (
    <div className="header-details-container">
      <img
        src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733042258/home_pubgiy.png"
        alt="home"
        className="home-icon"
      />
      <button type="button" className="process-owner-text">
        Process Owner HOD
      </button>
      <div className="header-user-info">
        <button type="button" className="admin-text">
          Admin
        </button>
        <p className="header-user-info-name">Palak Bansal</p>
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733042957/Ellipse_3855_sqyyl8.png"
          alt="avatar"
          className="avatar"
        />
      </div>
      <img
        src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733043404/slmnkwuxa9imrheujobn.png"
        alt="settings"
        className="settings-icon"
      />
      <div className="logout-container">
        <button type="button" className="logout-button">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733043720/sign-out_uqp6jr.png"
            alt="logout"
            className="logout-icon"
          />
        </button>
        <p className="logout-text">Logout</p>
      </div>
    </div>
  )

  return (
    <div className="header-container">
      <p className="chat-feed-text">Chat/Feed chat</p>
      {renderHederContent()}
    </div>
  )
}

export default UserDashboardHeader
