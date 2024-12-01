import './index.css'

const PersonDetails = () => {
  const renderPersonPrimaryDetails = () => (
    <ul className="customer-primary-details-container">
      <li className="primary-details-item">
        <p className="details-key">Customer ID</p>
        <div className="value-and-dots">
          <p className="value">12345</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <hr />
      <li className="primary-details-item">
        <p className="details-key">Email Address</p>
        <div className="value-and-dots">
          <p className="value">rachel@sample.com</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <hr />
      <li className="primary-details-item">
        <p className="details-key">Phone Number</p>
        <div className="value-and-dots">
          <p className="value">8051298905</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <li className="add-icon-text">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733060614/Vector_4_idnqwp.png"
          alt="plus icon"
          className="plus-icon"
        />
        <p className="add-text">Add</p>
      </li>
    </ul>
  )

  const renderLoyaltyTierSegmentDetails = () => (
    <ul className="customer-primary-details-container">
      <li className="primary-details-item">
        <p className="details-key">Loyalty Tier</p>
        <div className="value-and-dots">
          <p className="value">Silver</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <hr />
      <li className="primary-details-item">
        <p className="details-key">Segment</p>
        <div className="value-and-dots">
          <p className="value">Sleepy Customer</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <li className="add-icon-text">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733060614/Vector_4_idnqwp.png"
          alt="plus icon"
          className="plus-icon"
        />
        <p className="add-text">Add</p>
      </li>
    </ul>
  )

  const renderLifetimeValuePropensity = () => (
    <ul className="customer-primary-details-container">
      <li className="primary-details-item">
        <p className="details-key">Lifetime Value</p>
        <div className="value-and-dots">
          <p className="value">$ 1M</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <hr />
      <li className="primary-details-item">
        <p className="details-key">Propensity to Purchase</p>
        <div className="value-and-dots">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733062745/Ellipse_3851_flc35i.png"
            alt="percentage icon"
            className="percentage-icon"
          />
          <p className="value percentage">75%</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <li className="add-icon-text">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733060614/Vector_4_idnqwp.png"
          alt="plus icon"
          className="plus-icon"
        />
        <p className="add-text">Add</p>
      </li>
    </ul>
  )

  const renderEngagementScore = () => (
    <ul className="customer-primary-details-container">
      <li className="primary-details-item">
        <p className="details-key">Engagement Score</p>
        <div className="value-and-dots">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733063297/Ellipse_3851_1_kzoad1.png"
            alt="percentage icon"
            className="percentage-icon"
          />
          <p className="value percentage eighty-percentage">80%</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733059411/Group_1686558931_bgs9fh.png"
            alt="three dots"
            className="three-dots"
          />
        </div>
      </li>
      <li className="add-icon-text">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733060614/Vector_4_idnqwp.png"
          alt="plus icon"
          className="plus-icon"
        />
        <p className="add-text">Add</p>
      </li>
    </ul>
  )

  const renderPersonAddress = () => (
    <div className="person-address-container">
      <div className="cb-logo-container">
        <p className="cb-text">CB</p>
      </div>
      <div className="address-details">
        <h1 className="address-sec-heading">Hannibal Smith</h1>
        <div className="logo-address-container">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733053990/map-marker_c8vhl2.png"
            alt="location icon"
            className="location-icon"
          />
          <p className="address-text">
            1 Market Street San Francisco, CA 94105
          </p>
        </div>
      </div>
    </div>
  )

  const renderAssignButtons = () => (
    <>
      <button type="button" className="assign-agent-button">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733063744/user-add_k4ftny.png"
          alt="add icon"
          className="assign-icon"
        />
        <p>Assign other Agent</p>
      </button>
      <button type="button" className="assign-new-button">
        <p>Add New Widget</p>
      </button>
    </>
  )

  return (
    <div className="person-details-container">
      <div className="person-details-content">
        {renderPersonAddress()}
        {renderPersonPrimaryDetails()}
        {renderLoyaltyTierSegmentDetails()}
        {renderLifetimeValuePropensity()}
        {renderEngagementScore()}
        {renderAssignButtons()}
      </div>
    </div>
  )
}
export default PersonDetails
