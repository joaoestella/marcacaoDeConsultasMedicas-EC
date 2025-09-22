import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  background-color: ${theme.colors.error + '10'};
  border: 1px solid ${theme.colors.error + '30'};
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${theme.spacing.medium}px;
`;

export const ErrorText = styled.Text`
  flex: 1;
  color: ${theme.colors.error};
  font-size: 14px;
`;

export const DismissButton = styled.TouchableOpacity`
  padding: 4px;
`;