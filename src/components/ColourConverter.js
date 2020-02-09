import React, { useState } from "react"
import {
    Background,
    Container,
    Inner,
    Tab }
from "./styles"
import HexConverter from "./HexConverter"
import RGBConverter from "./RGBConverter"
import HSLConverter from "./HSLConverter"

const ColourConverter = () => {
    const [activeFormat, setActiveFormat] = useState("hex")
    const [colour, setColour] = useState("#000")

    const renderConverter = () => {
        if (activeFormat === "hex") {
            return <HexConverter setColour={setColour} />
        } else if (activeFormat === "rgb") {
            return <RGBConverter setColour={setColour} />
        } else if (activeFormat === "hsl") {
            return <HSLConverter setColour={setColour} />
        }
    }

    return (
        <Background colour={colour}>
            <Container>
                <Tab
                    onClick={() => setActiveFormat("hex")}
                    active={activeFormat === "hex"}
                >
                    HEX
                </Tab>
                <Tab
                    onClick={() => setActiveFormat("rgb")}
                    active={activeFormat === "rgb"}
                >
                    RGB
                </Tab>
                <Tab
                    onClick={() => setActiveFormat("hsl")}
                    active={activeFormat === "hsl"}
                >
                    HSL
                </Tab>
                <Inner>
                    {renderConverter()}
                </Inner>
            </Container>
        </Background>
    )
}

export default ColourConverter