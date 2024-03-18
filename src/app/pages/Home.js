import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../../features/authSlice";

export const Home = () => {

    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    console.log(auth)

    const onClick = () => {
        dispatch(authSlice.actions.login({
            username: "bonjour",
            password: "test"
        }))
    }

    return (
        <div>
            <button onClick={onClick}>click</button>

        </div>
    )
} 