
export const Feature = ({ image, feature__title, feature__text }) => {
    return (
        <div className="feature-item">
            <img src={image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{feature__title}</h3>
            <p>
                {feature__text}
            </p>
        </div>
    )
}