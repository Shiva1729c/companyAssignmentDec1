import './index.css'

const AskCatura = () => {
  const renderCaturaTemplate = () => (
    <div className="catura-template">
      <p>Greeting Template</p>
    </div>
  )
  const renderCaturaInputContainer = () => (
    <div className="catura-input-btn">
      <input
        type="text"
        className="catura-input"
        placeholder="Type a message..."
      />
      <button type="button" className="send-catura-btn">
        <img
          src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733104606/sent_gwgdn8.png"
          alt="send"
          className="send-icon"
        />
      </button>
    </div>
  )
  return (
    <div className="catura-container">
      <div className="catura-top-content">
        <p className="title">Ask Catura</p>
        <div className="message-envelope">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733105829/envelope_d1teqb.png"
            className="envelope-icon"
            alt="envelope icon"
          />
          <p className="catura-text">WhatsApp</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733105838/Vector_5_wqql83.png"
            className="vector icon"
            alt="vector-icon"
          />
        </div>
        <div className="message-envelope">
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733105829/envelope_d1teqb.png"
            className="envelope-icon"
            alt="envelope icon"
          />
          <p className="catura-text">Greetings</p>
          <img
            src="https://res.cloudinary.com/dxoqcqopl/image/upload/v1733105838/Vector_5_wqql83.png"
            className="vector icon"
            alt="vector-icon"
          />
        </div>
      </div>
      {renderCaturaTemplate()}
      {renderCaturaInputContainer()}
    </div>
  )
}

export default AskCatura
