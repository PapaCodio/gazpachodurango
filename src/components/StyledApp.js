import Styled from 'styled-components'
const maxWidth = 1000;

export const StyledApp = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100vw;
    height:100vh;
    overflow-x:hidden;
    overflow-y:hidden;
    position:fixed;

    .img {
        flex:1
        height:64%;
        width:100%;
        margin-right: 8px;
        &.flipped{
            margin-left: 8px;
            }
        img{
            height:100%;
        }
    }
    .app{
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100%;
        overflow-y:scroll;
        flex-shrink:0;
        box-shadow: 0 0 5px 5px rgba(0,0,0,.5);
    }
`