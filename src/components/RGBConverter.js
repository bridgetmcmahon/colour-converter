import React, { useState } from "react"
import { Output } from "./styles"
import { rgbToHex, rgbToHSL } from "../utils/converters"

const RGBConverter = props => {
    const [hexValue, setHexValue] = useState("")
    const [rgbValue, setRgbValue] = useState("")
    const [hslValue, setHslValue] = useState("")

    const calculate = () => {
        if (rgbValue.length >= 6) {
            setHexValue(rgbToHex(rgbValue))
            setHslValue(rgbToHSL(rgbValue))
            props.setColour(hexValue)
        }
    }

    return (
        <React.Fragment>
            <div>
                <label>Input an RGB value:</label>
                <input
                    type="text"
                    value={rgbValue}
                    onChange={e => setRgbValue(e.target.value)}
                    name="rgb"
                />
                <button onClick={() => calculate()}>
                    Convert
                </button>
            </div>
            <div>
                <Output>
                    <p>HEX</p>
                    <p>{hexValue}</p>
                </Output>
                <Output>
                    <p>HSL</p>
                    <p>{hslValue}</p>
                </Output>
            </div>
        </React.Fragment>
    )
}

export default RGBConverter