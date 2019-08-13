import Styled from 'styled-components'
const maxWidth = 1000;

export const StyledChili = Styled.div`
    .container{
        width:100%;
        background-color:#dba569;

        .cta-section{
            text-align:center;

            display:flex;
            justify-content:space-around;
            .btn{
                background-color: black;
                padding:8px 16px;
                margin:2rem 0;
                font-size:4.5vw;
                border-radius:3px;
                color:white;
                display:inline-block;
                text-decoration:none;
                text-transform: uppercase;
                /* box-shadow: 0px 0px 3px 3px rgba(0,0,0,.5); */
                @media(min-width:600px){
                    font-size:1.75rem;
                }
            }
        }

        .section-one{
            position:relative;
            img{
                width:100%;
                display:block;
            }
            .heading{
                position:absolute;
                top:0; left:0; right:0;
                font-size:12vw;
                text-align:center;
                font-family:'Bobby Rough';
                color: white;
                letter-spacing:1vw;
            }
        }
        .section-two{
            padding:2rem;
            p{
                text-align:center;
                font-size:1.25rem;
            }
        }
        .section-three{
            img{
                width:100%;
                display:block;
            }
            padding-bottom:7vw;
            @media(min-width:${maxWidth}px){
                padding-bottom:70px;
            }
        }
    }
`