import styled, {css} from 'styled-components';

const ArticleFormBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  form{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  }
  fieldset{
    width: 100%;
    border: none;
    padding: 5px 0;
  }
  .form_button{
    width: 170px;
  }
  input, textarea{
    width: 100%;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: .25rem;
    border: 1px solid rgba(0,0,0,.15);
    color: #55595c;
    font-family: SourceSansPro-Regular, sans-serif;
    outline: none;
  }
  input:focus, textarea:focus{
     border: 1px solid dodgerblue;
  }
  textarea::placeholder, input::placeholder{
    color: #A2AAB1;
  }
  .input_title{
    padding: .75rem 1.5rem;
    font-size: 1.5rem;
    border-radius: .3rem;
  }
  .input_title::placeholder{
    line-height: 1.25;
    font-size: 1.5rem;
    color: #A2AAB1;
  }
  button{
    padding: .75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: .3rem;
    border: none;
    cursor: pointer;
    display: flex;
    font-weight: 400;
    font-family: SourceSansPro-Regular, sans-serif;
    
    ${({theme}) => css`
      background: ${theme.colors.titleLogo};
      color: ${theme.colors.titleWhite};
    `
    }
  }
`;

export {
    ArticleFormBanner
}