import React from 'react';
import { Icon } from 'react-native-elements';
import { User } from '../../types';
import { getRoleText, getRoleColor, getRoleBackgroundColor, getRoleIcon } from '../../utils/roleHelpers';
import {
  Container,
  Header,
  UserInfo,
  UserName,
  UserEmail,
  RoleBadge,
  RoleText,
  ActionContainer,
  ActionButton,
  ActionButtonText,
  CurrentUserBadge,
  CurrentUserText,
} from './styles';

interface UserCardProps {
  user: User;
  isCurrentUser?: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  user,
  isCurrentUser = false,
  onEdit,
  onDelete,
}) => {
  return (
    <Container>
      <Header>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
          
          <RoleBadge role={user.role}>
            <Icon
              name={getRoleIcon(user.role)}
              type="material"
              size={14}
              color={getRoleColor(user.role)}
              style={{ marginRight: 4 }}
            />
            <RoleText role={user.role}>
              {getRoleText(user.role)}
            </RoleText>
          </RoleBadge>
        </UserInfo>

        {isCurrentUser && (
          <CurrentUserBadge>
            <CurrentUserText>Você</CurrentUserText>
          </CurrentUserBadge>
        )}
      </Header>

      {!isCurrentUser && (
        <ActionContainer>
          <ActionButton
            variant="edit"
            onPress={onEdit}
          >
            <Icon
              name="edit"
              type="material"
              size={16}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <ActionButtonText>Editar</ActionButtonText>
          </ActionButton>
          
          <ActionButton
            variant="delete"
            onPress={onDelete}
          >
            <Icon
              name="delete"
              type="material"
              size={16}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <ActionButtonText>Excluir</ActionButtonText>
          </ActionButton>
        </ActionContainer>
      )}
    </Container>
  );
};

export default UserCard;