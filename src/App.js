

import { useState } from "react";
import * as math from "mathjs";
import "./App.css"
import Button from "./components/Button";
import Input from "./components/input";
const App = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const addToText = (val) => {
        setText((text) => [...text, val + " "]);
    };
    const calculateResult = () => {
        const input = text.join("");

        setResult(math.evaluate(input));
    };

    const cleart = () => {
        setText("");
        setResult("");
    };
    const btncolor = "green";
    const btn = "orange";
    return (

        <div className="App" >


            <div className="cla-walper">
                <Input text={text} result={result} />

                <div className="row">
                    <Button symbol="7" handleClick={addToText} />
                    <Button symbol="8" handleClick={addToText} />
                    <Button symbol="9" handleClick={addToText} />
                    <Button symbol="/" color={btn} handleClick={addToText} />
                </div>
                <div className="row">
                    <Button symbol="4" handleClick={addToText} />
                    <Button symbol="5" handleClick={addToText} />
                    <Button symbol="6" handleClick={addToText} />
                    <Button symbol="*" handleClick={addToText} color={btn} />
                </div>
                <div className="row">
                    <Button symbol="1" handleClick={addToText} />
                    <Button symbol="2" handleClick={addToText} />
                    <Button symbol="3" handleClick={addToText} />
                    <Button symbol="+" handleClick={addToText} color={btn} />
                </div>
                <div className="row">
                    <Button symbol="0" handleClick={addToText} />
                    <Button symbol="." handleClick={addToText} />
                    <Button symbol="=" handleClick={calculateResult} />
                    <Button symbol="-" color={btn} handleClick={addToText} />
                </div>
                <Button symbol="clear" color={btncolor} handleClick={cleart} />

            </div>
        </div>
    );
};
export default App;