import {connect} from "react-redux";
import selector from "../../Selector";
import thank_uImg from "../../Images/Thank_you.webp";
import '../../App.css'

const MyProfile = (props) => {
    const {count} = props
    return (
        <div>
            <h1>Welcome to your profile page. You have selected {count} items</h1>
            <div className="flex">
                <img src={thank_uImg} alt="img" width="500px"/>

            </div>
        </div>
    )
}
export default connect(selector)(MyProfile)