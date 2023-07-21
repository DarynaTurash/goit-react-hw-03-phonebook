import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage, Field } from 'formik';

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
gap: 15px;
padding: 25px;
border: 1px solid #2a2a2a;
width: 375px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
background-color: #DE6363;
color: white;
border-radius: 7px;
padding: 5px 10px 5px 10px;
margin: 5px 0 5px 0;
width: 255px;
`;

export const FormField = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
font-weight: 600;
`;

export const FieldInput = styled(Field)`
width: 340px;
padding: 10px 15px 10px 15px;

&:hover {
    border-color: #317EC6;
}

&::placeholder {
    opacity: 0.3;
}
`;

export const SubmitButton = styled.button`
width: 375px;
padding: 10px 10px 10px 10px;
margin-top: 15px;
border: 0;
border-radius: 7px;
font-weight: 600;
background-color: #A2C2DF;

&:hover {
    background-color: #317EC6;
    color: white;
}

`;



