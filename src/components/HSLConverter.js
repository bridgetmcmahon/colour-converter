import React, { useState, useEffect } from "react"
import { Output } from "./styles"
import { hslToHex, hslToRGB } from "../utils/converters"

const HSLConverter = props => {
    const [hexValue, setHexValue] = useState("")
    const [rgbValue, setRgbValue] = useState("")
    const [hslValue, setHslValue] = useState("")

    const calculate = () => {
        if (hslValue.length >= 6) {
            setHexValue(hslToHex(hslValue))
            setRgbValue(hslToRGB(hslValue))
            props.setColour(hexValue)
        }
    }

    useEffect(() => {
        if (hslValue.length >= 6) {
            setHexValue(hslToHex(hslValue))
            setRgbValue(hslToRGB(hslValue))
        }
    }, [hslValue])

    return (
        <React.Fragment>
            <div>
                <label>Input a HSL value:</label>
                <input
                    type="text"
                    value={hslValue}
                    onChange={e => setHslValue(e.target.value)}
                    name="hsl"
                />
                <button onClick={() => calculate}>
                    Convert
                </button>
            </div>
            <div>
                <Output>
                    <p>HEX</p>
                    <p>{hexValue}</p>
                </Output>
                <Output>
                    <p>RGB</p>
                    <p>{rgbValue}</p>
                </Output>
            </div>
        </React.Fragment>
    )
}

export default HSLConverter