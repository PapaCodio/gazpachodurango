import Styled from 'styled-components'
// const maxWidth = 1000;

export const StyledApp = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    /*width:100vw;
    height:100%;
    overflow-x:hidden;
    overflow-y:hidden;
    position:fixed;

    .img-container {
        flex:1
        height:64%;
        width:100%;
        margin-right: 8px;
        position:relative;

        &.flipped{
            margin-left: 8px;
        }
        img{
            height:100%;
            position:absolute;
            margin-left:auto;
            left:0;right:0;
            &.flipped{
                margin-left:0;
                margin-right:auto;
            }
        }
    } */
    .app{

        max-width:1000px;
        display:flex;
        flex-direction:column;
        align-items:center;
        box-shadow: 0 0 1vw 1vw rgba(0,0,0,.5);
        /* width:100%; */
        /* height:100%; */
        /* overflow-y:scroll; */
        /* flex-shrink:0; */
    }
`