import Styled from 'styled-components'
const maxWidth = 1500;
const maxWidthSection3 = 1000;

export const StyledLanding = Styled.div`
    max-width:${maxWidth}px;
    width:100%;

    .container{
        .inquire-section{
            text-align:center;
            .inquire-button{
                background-color: #786b7f;
                padding:8px 16px;
                margin:2rem;
                font-family:'Avenir Next';
                font-size:4.5vw;
                border-radius:3px;
                color:white;
                display:inline-block;
                text-decoration:none;
                @media(min-width:600px){
                    font-size:1.75rem;
                }
            }
        }
        .section-one{
            background-color:#c5b18c;
            text-align:right;
            position:relative;

            img {
                width:60%;
                vertical-align:middle;
            }
            .tagline{
                text-align:center;
                position:absolute;
                top:15vw;
                left:.75rem;
                font-family:'Bobby Jones';
                font-size:5vw;
                width:50%;
                color:white;
                @media(min-width:${maxWidth}px){
                    top:${maxWidth*.15}px;
                    font-size:${maxWidth*.05}px;
                }
            }
        }
        .section-two{
            background-color:#786b7f;
            position:relative;
            display:flex;
            justify-content:flex-end;

            img {
                width:65%;
                border-radius:50%;
                margin: auto 0;
                position: absolute;
                top: 0; left: 0; bottom: 0; right: 0;
                z-index:1000;
            }
            .tagline{
                text-align:center;
                font-family:'Avenir Next';
                font-size:2vw;
                width:35%;
                color:white;
                align-self:end;
                padding: 3rem 0;
                @media(min-width:${maxWidth}px){
                    font-size:${maxWidth*.02}px;
                }
            }
        }
        .section-three{
            background-color:#c5b18c;
            .title{
                text-align:center;
                font-family:'Lance Sans';
                font-size:7.5vw;
                color:white;
                padding-top: 19vw;
                background-color:#c5b18c;
                @media(min-width:600px){
                    padding-top: 22vw;
                }
                @media(min-width:${maxWidthSection3}px){
                    font-size:${(1000*.075)/16}rem;
                    padding-top: 23vw;
                }
                @media(min-width:${maxWidth}px){
                    padding-top: ${maxWidth * .23}px;
                }
            }
            .content-container{
                max-width:${maxWidthSection3}px;
                margin:auto auto;
                position:relative;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-content:center;
                img {
                    width:75%;
                    height:auto;
                    margin:auto auto;
                }
                .tagline{
                    text-align:center;
                    font-family:'Bobby Jones';
                    font-size:4vw;
                    text-shadow: 2px 2px #821b47;
                    color:white;
                    position:absolute;
                    @media(min-width:${maxWidthSection3}px){
                        font-size:${maxWidthSection3 * .04}px;
                    }

                    &.left{
                        left:2.5vw;
                        top:10vw;
                        @media(min-width:${maxWidthSection3}px){
                            left:${maxWidthSection3 *.025}px;
                            top:${maxWidthSection3 *.1}px;
                        }
                    }
                    &.right{
                        right:2.5vw;
                        bottom:4vw;
                        @media(min-width:${maxWidthSection3}px){
                            right:${maxWidthSection3 * .025}px;
                            bottom:${maxWidthSection3 * .04}px;
                        }
                    }
                }
            }
        }
    }
`