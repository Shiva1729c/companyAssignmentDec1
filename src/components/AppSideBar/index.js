import './index.css'

const AppSideBar = () => {
  const renderSideBarContainer = () => (
    <ul className="sidebar-items-container">
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733033127/amk2t9cserx0xjtb43u8.png"
            alt="file search"
            className="item-icon"
          />
          <p className="item-text">Internal Audit</p>
        </div>
        <button type="button" className="arrow-button">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733034169/greaterIcon_srhqig.png"
            alt="arrow icon"
            className="arrow-icon"
          />
        </button>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733036237/affwco3ycwl7zvb35efc.png"
            alt="testing"
            className="item-icon"
          />
          <p className="item-text">UAT Testing</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733036415/jvlpkz6rfvzivodyvy9h.png"
            alt="intract icon"
            className="item-icon"
          />
          <p className="item-text">Intract</p>
        </div>
        <button type="button" className="arrow-button">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733034169/greaterIcon_srhqig.png"
            alt="arrow icon"
            className="arrow-icon"
          />
        </button>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037182/users_qlmlft.png"
            alt="queue icon"
            className="item-icon"
          />
          <p className="item-text">Queue</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733036608/sitemap_r705r1.png"
            alt="workflow icon"
            className="item-icon"
          />
          <p className="item-text">Workflow</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733036813/user_h2ti3x.png"
            alt="admin icon"
            className="item-icon"
          />
          <p className="item-text">Admin</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037323/Vector_vlrqss.png"
            alt="asset icon"
            className="item-icon"
          />
          <p className="item-text">Asset</p>
        </div>
        <div className="close-container">
          <button type="button" className="close-button">
            <img
              src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733040204/Vector_3_ftidap.png"
              alt="close"
              className="close-icon"
            />
          </button>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037447/users_1_gimcpb.png"
            alt="parent icon"
            className="item-icon"
          />
          <p className="item-text">Parent</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037539/circle-off_eoxsyn.png"
            alt="option one icon"
            className="item-icon"
          />
          <p className="item-text">Option One</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037677/circle-off_1_ozrwhq.png"
            alt="option two icon"
            className="item-icon"
          />
          <p className="item-text">Option Two</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037743/wrench_yxeaj1.png"
            alt="accessories icon"
            className="item-icon"
          />
          <p className="item-text">All Accessories</p>
        </div>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733033127/amk2t9cserx0xjtb43u8.png"
            alt="audit icon"
            className="item-icon"
          />
          <p className="item-text">Internal Audit</p>
        </div>
        <button type="button" className="arrow-button">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733034169/greaterIcon_srhqig.png"
            alt="arrow icon"
            className="arrow-icon"
          />
        </button>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037823/Icon_3_o8ukbr.png"
            alt="decorating icon"
            className="item-icon"
          />
          <p className="item-text">Decorating</p>
        </div>
        <button type="button" className="arrow-button">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733034169/greaterIcon_srhqig.png"
            alt="arrow icon"
            className="arrow-icon"
          />
        </button>
      </li>
      <li className="sidebar-item">
        <div className="icon-and-text">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733037887/Vector_1_p7vyyt.png"
            alt="presenting icon"
            className="item-icon"
          />
          <p className="item-text">Presenting</p>
        </div>
      </li>
    </ul>
  )

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733031775/msw1lpalim14jlscxy2n.png"
          alt="app logo"
          className="app-logo"
        />
        {renderSideBarContainer()}
      </div>
    </div>
  )
}

export default AppSideBar
