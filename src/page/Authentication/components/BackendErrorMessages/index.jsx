import React from "react";

import styled, {css} from "styled-components";

const ErrorMessagesUl = styled.ul`
  padding-left: 15px;
`;

const ErrorMessagesLi = styled.li`
 padding: 5px 5px 5px 0;
 text-align: left;
 font-size: 14px;
 font-weight: bold;
 
 ${({theme}) => css`
    color: ${theme.colors.errorMessages};
 `}
`;

const BackendErrorMessages = ({backendErrors}) => {
    const errorMessages = Object.keys(backendErrors).map(name => {
        const messages = backendErrors[name].join(' ')
        return `${name} ${messages}`
    })
    console.log('errorMessages', errorMessages)
    return <ErrorMessagesUl>
        {errorMessages.map(item => {
            return (
                <ErrorMessagesLi key={item}>
                    {item}
                </ErrorMessagesLi>
            )
        })}
    </ErrorMessagesUl>
}

export default BackendErrorMessages;