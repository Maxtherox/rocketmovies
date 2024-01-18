import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    

    > header {
        width: 100%;
        height: 140px;
        background: ${({theme}) => theme.COLORS.PINK_OPACITY_05};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 24px;
        }
        a {
            color: ${({theme}) => theme.COLORS.PINK} ;
            margin-left: 8px;
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }

`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4){
        margin-top: 24px;
    }
    `

export const Avatar = styled.div`

    position: relative;
    margin: -124px auto 32px;
    width: 186px;
    height: 186px;

    > img{ 
    width: 186px;
    height: 186px;
    border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }

`