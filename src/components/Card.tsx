import styled from '../lib/styled'

export const Card = styled.div`
    display: flex;
    /* border: 1px solid ${props => props.theme.primary}; */
    border-radius: 8px;
    margin: 8px;
    background: ${props => props.theme.navbar};
    opacity: 0.8;
    box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.5);
`

export const CardTitle = styled.h2`
    color: ${props => props.theme.primary};
    margin-top:0;
    font-size: 16px;
    font-weight: bold;
    line-height:1;
`

export const CardBody = styled.div`
    padding: 16px;
    width:100%;
    font-size: 16px;
`

export const CardLinks = styled.div`
width: 3rem;
display: flex;
justify-content: space-between;
`

export const CardMedia = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: fill;
`