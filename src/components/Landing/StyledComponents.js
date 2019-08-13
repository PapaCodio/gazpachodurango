import Styled from 'styled-components'
const maxWidth = 1000;

export const StyledLanding = Styled.div`
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
        .video-section{
            width:100%;
            /* height:calc(100vw/(16/9));
            max-height:${1000/(16/9)}px; */
            background-color: rgba(0,0,0,.5);
            position:relative;
            img{
                width:100%;
                display:block;
            }
            /* img{
                position:absolute;
                top:0; right:0; bottom:0; left:0;
                margin:auto auto;
                height:20vw;
                max-height:200px;
                border-radius:50%
                &:hover{
                    box-shadow:0 0 5px 5px rgba(0,0,0,.75);
                }
            } */
            &:hover{
                background-color: rgba(0,0,0,.65);
            }
        }

        .section-one{
            display:flex;

            img {
                width:50%;
                height:auto;
                vertical-align:middle;
                align-self: center
            }

            .tagline{
                width:50%;
                text-align:center;
                font-family:'Bobby Rough';
                font-size:4vw;
                color:black;
                line-height:5vw;
                padding:10vw 16px 0 16px;

                @media(min-width:${maxWidth}px){
                    padding:100px 1rem;
                    font-size:${maxWidth*.04}px;
                    line-height:50px;
                }
            }
        }

        .section-two{
            background-color:#009346;
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

                @media(min-width:${maxWidth}px){
                    width:650px;
                }
            }
            .tagline{
                text-align:center;
                font-size:2.4vw;
                /* line-height:8vw; */
                width:35%;
                color:black;
                align-self:end;
                padding: 1rem 0;
                @media(min-width:${maxWidth}px){
                    font-size:${maxWidth*.024}px;
                }
            }
        }
        .section-three{
            display:flex;
            height:55vw;
            padding-bottom:1rem;
            @media(min-width:${maxWidth}px){
                height:550px;
            }
            .section{
                display:flex;
                width:50%;
            }
            .left{
                align-items:flex-end;
                justify-content:center;
            }
            .right{
                flex-direction:column;
                align-items:center;
                .section-header{
                    flex:1;
                    font-family:'Bobby Rough';
                    font-size:7vw;
                    display:flex;
                    align-items:flex-end;
                    @media(min-width:${maxWidth}px){
                        font-size:70px;
                    }
                }
                .section-content{
                    flex:1;
                    text-align:center;
                    padding: 0 3vw;
                    font-size:3vw;
                    @media(min-width:${maxWidth}px){
                        font-size:30px;
                        padding: 0 30px;
                    }
                    h2{
                        margin-bottom:0;
                    }
                    p{
                        margin:0 0;
                    }
                }

            }
            img{
                width:80%;
            }
        }
        .section-four{
            img{
                width:100%;
            }
        }
        .section-five{
            font-family:'Bobby Rough';
            text-transform:uppercase;
            padding:2rem;
            text-align:center;
            font-size:1.25rem;
        }
    }
`