import styled from 'styled-components/native';
import theme from '../../../../styles/theme';

export const Container = styled.View`
  margin-bottom: ${theme.spacing.large}px;
`;

export const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.medium}px;
`;