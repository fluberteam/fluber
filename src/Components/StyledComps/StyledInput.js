import styled from 'styled-components'

export const StyledInput = styled.input.attrs(props => ({
    type: props.type || 'text',
}))`
    color: #484747;
    border: 1px solid black;
    border-radius: 3px;
    width: 100%;
`