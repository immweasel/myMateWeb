import "./MenuProfileItem.css"

export default ({ title, logo, condition }) => {
    return <a href="#" className="menu-item">
        <div className="menu-item__logo">
            <img src={logo} alt="" />
        </div>
        <div className="menu-item__text">
            <span className="menu-item__text_title">{title}</span>
            <span className="menu-item__text_condition">{condition}</span>
        </div>
    </a>
}