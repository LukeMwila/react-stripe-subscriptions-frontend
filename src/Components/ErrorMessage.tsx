import * as React from "react";
import styled from "styled-components";

/** Theme */
import { Colors } from "../Theme";

type ErrorMessageProps = {
  errorMessage: string | null;
};

const ErrorMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  color: ${Colors.red};
`;

const ErrorMessageContainer: React.SFC<ErrorMessageProps> = ({
  errorMessage
}) => {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};

export default ErrorMessageContainer;
