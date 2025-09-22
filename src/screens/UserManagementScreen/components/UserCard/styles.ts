import styled from 'styled-components/native';
import theme from '../../../../styles/theme';
import { getRoleColor, getRoleBackgroundColor } from '../../utils/roleHelpers';
import { UserRole } from '../../types';

export const Container = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  border: 1px solid ${theme.colors.border};
  elevation: 2;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.small}px;
`;

export const UserInfo = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

export const UserEmail = styled.Text`
  font-size: 14px;
  color: ${theme.colors.text};
  opacity: 0.7;
  margin-bottom: ${theme.spacing.small}px;
`;

export const RoleBadge = styled.View<{ role: UserRole }>`
  background-color: ${(props) => getRoleBackgroundColor(props.role)};
  padding: 6px 10px;
  border-radius: 20px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const RoleText = styled.Text<{ role: UserRole }>`
  color: ${(props) => getRoleColor(props.role)};
  font-size: 12px;
  font-weight: 600;
`;

export const CurrentUserBadge = styled.View`
  background-color: ${theme.colors.primary + '20'};
  padding: 4px 8px;
  border-radius: 12px;
`;

export const CurrentUserText = styled.Text`
  color: ${theme.colors.primary};
  font-size: 11px;
  font-weight: 600;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${theme.spacing.small}px;
`;

export const ActionButton = styled.TouchableOpacity<{ variant: 'edit' | 'delete' }>`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 4px;
  flex-direction: row;
  background-color: ${(props) => 
    props.variant === 'edit' 
      ? theme.colors.info 
      : theme.colors.error
  };
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;