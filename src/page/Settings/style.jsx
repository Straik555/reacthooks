import styled, {css} from "styled-components";

const SettingsBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SettingsContainer = styled.div`
  width: 600px;
  padding: 0  20px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 2.5rem;
    text-align: center;
    font-weight: normal;
  }
   
  form{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px 0;
  }
  fieldset{
    width: 100%;
    border: none;
    padding-bottom: 15px;
  }
  input, textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0,0,0,.15);
    padding: .75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    font-family: SourceSansPro-Regular, sans-serif;
    outline: none;
  }
  input:focus, textarea:focus{
     border: 1px solid dodgerblue;
  }
  .input_url {
    padding: .5rem .75rem;
    font-size: 1rem;
  }
  .button_update{
    width: 200px;
    padding: .65rem 1.5rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    border: 1px solid #5cb85c;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    cursor: pointer;
    ${({theme}) => css`
      background: ${theme.colors.titleLogo};
      color: ${theme.colors.titleWhite};
    `
}
    :hover{
      border: 1px solid #57A957;
      background: #57A957;
    }
  }
  hr{
    margin-bottom: 15px;
  }
  .button_logout{
    width: 200px;
    color: #b85c5c;
    background-color: transparent;
    border: 1px solid #b85c5c;
    padding: .5rem 1rem;
    font-size: 1rem;
    border-radius: .25rem;
    cursor: pointer;
    :hover{
      background: #b85c5c;
      color: #fff;
    }
  }
`;

export {
    SettingsBanner,
    SettingsContainer
}