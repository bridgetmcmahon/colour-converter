import React, { useState } from "react"
import { Output } from "./styles"
import { hexToRGB, hexToHSL } from "../utils/converters"

const HexConverter = props => {
    const [hexValue, setHexValue] = useState("")
    const [rgbValue, setRgbValue] = useState("")
    const [hslValue, setHslValue] = useState("")

    const calculate = () => {
        if (hexValue[0] === "#" && hexValue.length >= 7) {
            setRgbValue(hexToRGB(hexValue))
            setHslValue(hexToHSL(hexValue))
            props.setColour(hexValue)
        } else if (hexValue.length === 6) {
            setRgbValue(hexToRGB(hexValue))
            setHslValue(hexToHSL(hexValue))
            props.setColour(hexValue)
        }
    }

    return (
        <React.Fragment>
            <div>
                <label>Input a HEX value:</label>
                <input
                    type="text"
                    value={hexValue}
                    onChange={e => setHexValue(e.target.value)}
                    name="hex"
                />
                <button onClick={() => calculate()}>
                    Convert
                </button>
            </div>
            <div>
                <Output>
                    <p>RGB</p>
                    <p>{rgbValue}</p>
                </Output>
                <Output>
                    <p>HSL</p>
                    <p>{hslValue}</p>
                </Output>
            </div>
        </React.Fragment>
    )
}

export default HexConverter