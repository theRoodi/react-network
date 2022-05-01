import { NavLink } from "react-router-dom"

const Dialog = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
}

export default Dialog