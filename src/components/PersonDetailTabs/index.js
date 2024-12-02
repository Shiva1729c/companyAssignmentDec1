import './index.css'

const PersonDetailTabs = () => {
  const renderTabDetails = () => (
    <>
      <li className="tab-item">
        <div className="cb">
          <p>CB</p>
        </div>
        <p className="person-name">Cheyenne Bergson</p>
      </li>
      <li className="tab-item">
        <div className="cb cb-another-color">
          <p>CB</p>
        </div>
        <p className="person-name">Jonathan Higgins</p>
      </li>
      <li className="tab-item">
        <div className="cb cb-another-color">
          <p>CB</p>
        </div>
        <p className="person-name">Capt. Trunk</p>
      </li>
      <li className="tab-item selected-item">
        <div className="cb cb-another-color">
          <p>CB</p>
        </div>
        <p className="person-name">Hannibal Smi..</p>
      </li>
      <li className="tab-item">
        <div className="cb cb-another-color">
          <p>CB</p>
        </div>
        <p className="person-name">Capt. Trunk</p>
      </li>
      <li className="tab-item">
        <div className="cb cb-another-color">
          <p>CB</p>
        </div>
        <p className="person-name">Hannibal Smi..</p>
        <span className="count">2</span>
      </li>

      <li className="tab-item messaging-item">
        <div className="messaging-logo cb">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733050206/comments_n8slwx.png"
            alt="message logo"
            className="message-logo"
          />
        </div>
        <p className="message-name">Messaging</p>
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733051077/arrowGreater_iasjti.png"
          alt="arrow"
          className="arrow-right"
        />
      </li>
    </>
  )
  return <ul className="tabs-container">{renderTabDetails()}</ul>
}

export default PersonDetailTabs
