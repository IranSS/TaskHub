import {
  InputContainer,
  InputText,
  ErrorText,
  IconContainer,
  Container,
} from "./styles";

import { Controller } from "react-hook-form";

const Input = ({
  leftIcon,
  name,
  control,
  errorMessage,
  multiline,
  ...rest
}) => {
  return (
    <Container>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <InputContainer className="glassy-border">
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) =>
            multiline ? (
              <InputText
                as="textarea"
                className="textarea"
                rows={4}
                {...field}
                {...rest}
                value={field.value || ""}
              />
            ) : (
              <InputText {...field} {...rest} value={field.value || ""} />
            )
          }
        />
      </InputContainer>
    </Container>
  );
};

export { Input };
