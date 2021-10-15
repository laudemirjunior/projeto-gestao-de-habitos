import styled from 'styled-components'
import background from '../../images/background-home.png'
export const Background = styled.div`
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width:1024px){
        .container {
            max-width: 1366px;
            width: 100%;
            height: 100%;
            background:url(${background}) no-repeat;
            background-size:contain;
            margin-bottom:3%;
            
          }

          .name_page{
            width: 224px;
            height: 367px;
            margin:25px 7px;
        }
          
    }
    
    
    .name_page span{
        font-weight: bold;
        font-size:50px;
        line-height: 70px;
    }

    .description{
        width: 386px;
        height: 84px;
        margin-right:10%;
        margin-bottom:20%;
        font-size: 26px;
        line-height: 35px;
    }
    .btns{
        margin-top:20%;
    }

    

`