import React, { useState } from "react"

import { Container } from "./styles"

const ColourConverter = () => {
    const [hexValue, setHexValue] = useState("")
    const [rgbValue, setRgbValue] = useState("")
    const [hslValue, setHslValue] = useState("")

    return (
        <Container>
            <label>HEX:</label>
            <input type="text" value={hexValue} onChange={e => setHexValue(e.target.value)} name="hex" />
            <label>RGB:</label>
            <input type="text" value={rgbValue} onChange={e => setRgbValue(e.target.value)} name="rgb" />
            <label>HSL:</label>
            <input type="text" value={hslValue} onChange={e => setHslValue(e.target.value)} name="hsl" />
        </Container>
    )
}

export default ColourConverter