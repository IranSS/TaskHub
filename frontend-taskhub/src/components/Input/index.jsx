import {
    InputContainer,
    InputText,
    ErrorText,
    IconContainer,
    Container
} from "./styles";

import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
    return (
        <Container>
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            <InputContainer>
                {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...field} {...rest} />} />
            </InputContainer>
        </Container>
    );
};

export { Input };