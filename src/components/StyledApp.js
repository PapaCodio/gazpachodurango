import Styled from 'styled-components'
const maxWidth = 1000;

export const StyledApp = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    overflow-x:hidden;
    overflow-y:hidden;
    position:fixed;

    .app{
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;
        overflow-y:scroll;
        flex-shrink:0;
    }
`