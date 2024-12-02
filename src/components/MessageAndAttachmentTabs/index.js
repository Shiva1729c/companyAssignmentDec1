import './index.css'

import {Chrono} from 'react-chrono'

const MessageAndAttachmentTabs = () => {
  const renderMessageInputs = () => (
    <div className="bottom-input-message">
      <input
        type="text"
        placeholder="Type a message..."
        className="message-input"
      />
      <button type="button" className="save-btn">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733104592/save_rhfuuf.png"
          alt="save"
          className="save-icon"
        />
      </button>
      <button type="button" className="send-btn">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733104606/sent_gwgdn8.png"
          alt="send"
          className="send-icon"
        />
        Send
      </button>
    </div>
  )
  const renderBottomInput = () => (
    <div className="bottom-container">
      <div className="checkbox-container">
        <div className="input-container">
          <input type="checkbox" id="sms" checked />
          <label htmlFor="sms" className="input-text checked">
            SMS
          </label>
        </div>
        <div className="input-container">
          <input type="checkbox" id="watsapp" />
          <label htmlFor="watsapp" className="input-text">
            WhatsApp
          </label>
        </div>
        <div className="input-container">
          <input type="checkbox" id="mail" checked />
          <label htmlFor="mail" className="input-text checked">
            Email
          </label>
        </div>
      </div>
      {renderMessageInputs()}
    </div>
  )

  const renderToMessage = () => (
    <div className="message-details">
      <div className="message-content">
        <div className="cb-message">
          <p>CB</p>
        </div>
        <div>
          <p className="mess-from-name">You</p>
          <div className="time">
            <p className="date">27Jul, 2024</p>
            <p>9:08PM</p>
            <p>. Sent By WhatsApp</p>
            <img
              src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733100869/check_1_ucqqz4.png"
              alt="delivered icon"
              className="delivered-icon"
            />
            <img
              src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733101087/Frame_atvwql.png"
              alt="three dots"
              className="three-dots-settings"
            />
          </div>
        </div>
      </div>
      <div className="message">
        Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
        aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas
        mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie
        nam morbi id arcu volutpat arcu.
      </div>
    </div>
  )
  return (
    <div className="Message-and-attachment-container">
      <div className="tabs">
        <button type="button" className="tab-button active-btn">
          Conversation
        </button>
        <button type="button" className="tab-button ">
          Attachment
        </button>
      </div>
      <div className="message-details">
        <div className="message-content">
          <div className="cb-message">
            <p>CB</p>
          </div>
          <div>
            <p className="mess-from-name">Rachel Adams</p>
            <div className="time">
              <p>9:08PM</p>
              <p>. Received By WhatsApp</p>
              <img
                src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733100869/check_1_ucqqz4.png"
                alt="delivered icon"
                className="delivered-icon"
              />
              <img
                src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733101087/Frame_atvwql.png"
                alt="three dots"
                className="three-dots-settings"
              />
            </div>
          </div>
        </div>
        <div className="message">
          Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac
          aliquam. Placerat maecenas quis ut elementum praesent imperdiet.
          Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum.
          Molestie nam morbi id arcu volutpat arcu.
        </div>
      </div>
      {renderToMessage()}
      {renderBottomInput()}
    </div>
  )
}

export default MessageAndAttachmentTabs
