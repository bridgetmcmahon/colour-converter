import styled from "styled-components"

export const Background = styled.div`
    background-color: ${props => props.colour};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    max-width: 720px;
    min-width: 25rem;
    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.2);
`

export const Inner = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    max-width: 720px;
    color: black;
    border-radius: 0 5px 5px 5px;
    padding: 2rem;

    input {
        margin-left: 1rem;
    }
`

export const Tab = styled.div`
    display: inline-block;
    margin-right: 0.5rem;
    padding: 1rem;
    border-radius: 4px 4px 0 0;
    max-width: 8rem;
    background-color: white;

    ${props => props.active && `
        background-color: rgba(255, 255, 255, 0.8);
    `}
`

export const Output = styled.div`
    display: inline-block;
    padding: 2rem;
`