import Styled from 'styled-components'
// const maxWidth = 1000;

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
            background-color: rgba(0,0,0,.25);
            img{
                width:100%;
                display:block;
            }
            .section-content{
                text-align:center;
                color: white;
                padding: 1rem ;
            }
        }

        .section-two{
            img{
                width:100%;
                display:block;
            }
        }
        .section-three{
            padding:2rem;
            text-align:center;
            p{
                font-size:1.25rem;
            }
        }
    }
`