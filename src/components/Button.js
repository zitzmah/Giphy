import {useState} from "react"

function Button(props) {
    const [buttonClicked, setButtonClicked] = useState(false);

    const getGiph = () => {
        props.getGiphFromApp();
    }

    return(
        <button type="button" onClick={getGiph}>
            Make API Call Again
        </button>
    )
}

export default Button;