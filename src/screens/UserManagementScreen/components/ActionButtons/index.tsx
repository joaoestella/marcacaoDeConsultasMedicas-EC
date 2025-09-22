import React from 'react';
import { Icon } from 'react-native-elements';
import theme from '../../../../styles/theme';
import {
  Container,
  PrimaryButton,
  SecondaryButton,
  ButtonText,
  RefreshButton,
  ButtonContainer,
} from './styles';

interface ActionButtonsProps {
  onAddUser?: () => void;
  onRefresh?: () => void;
  onBack?: () => void;
  showBackOnly?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onAddUser,
  onRefresh,
  onBack,
  showBackOnly = false,
}) => {
  if (showBackOnly && onBack) {
    return (
      <Container>
        <SecondaryButton onPress={onBack}>
          <Icon
            name="arrow-back"
            type="material"
            size={18}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <ButtonText>Voltar</ButtonText>
        </SecondaryButton>
      </Container>
    );
  }

  return (
    <Container>
      <ButtonContainer>
        <PrimaryButton onPress={onAddUser}>
          <Icon
            name="person-add"
            type="material"
            size={18}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <ButtonText>Adicionar Usuário</ButtonText>
        </PrimaryButton>

        {onRefresh && (
          <RefreshButton onPress={onRefresh}>
            <Icon
              name="refresh"
              type="material"
              size={20}
              color={theme.colors.primary}
            />
          </RefreshButton>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ActionButtons;