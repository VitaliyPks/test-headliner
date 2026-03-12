import { ContainerErrorState, Icon, Message } from "./ErrorState.styled";
import { Button } from "../button";

interface IErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({
  message = "Произошла ошибка при загрузке данных",
  onRetry,
}: IErrorProps) => (
  <ContainerErrorState>
    <Icon>⚠️</Icon>
    <Message>{message}</Message>
    {onRetry && <Button onClick={onRetry}>Попробовать снова</Button>}
  </ContainerErrorState>
);
