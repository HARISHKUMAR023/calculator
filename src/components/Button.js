
import "./Button.css";
const Button = ({ symbol, color, handleClick }) => {

    return (

        <div onClick={() => handleClick(symbol)}
            className="btn" style={{ backgroundColor: color }}>
            {symbol}
        </div>

    );
};
export default Button;