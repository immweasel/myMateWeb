import "./MenuProfileItem.css"

export default function MenuProfileItem({ title, icon, condition, link }) {
    
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a href={link} className="menu-item">
        <img src={icon} alt="" />
        <div className="menu-item__text">
            <p className="menu-item__text_title">{title}</p>
            {/* <p className="menu-item__text_condition">{condition}</p> */}
        </div>
    </a>
}