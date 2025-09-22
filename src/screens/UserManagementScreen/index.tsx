import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import theme from '../../styles/theme';

// Componentes locais
import UserCard from './components/UserCard';
import UserStats from './components/UserStats';
import ActionButtons from './components/ActionButtons';
import EmptyState from '../AdminDashboardScreen/components/EmptyState';

// Hooks customizados
import { useUserManagement } from './hooks/useUserManagement';

// Estilos
import {
  Container,
  ScrollContainer,
  Header as HeaderContainer,
  Title,
  Subtitle,
  SectionContainer,
  LoadingContainer,
  LoadingText,
} from './styles';

/**
 * UserManagementScreen Refatorada
 * 
 * Esta refatoração demonstra:
 * - Separação clara de responsabilidades
 * - Componentes especializados e reutilizáveis
 * - Custom hooks para lógica de negócio
 * - Estrutura modular e escalável
 * - Código limpo e bem documentado
 */

const UserManagementScreen: React.FC = () => {
  const { user } = useAuth();
  const {
    users,
    loading,
    userStats,
    deleteUser,
    refreshUsers,
    navigateBack,
    navigateToAddUser,
    navigateToEditUser,
  } = useUserManagement();

  // Loading state
  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.colors.primary} />
          <LoadingText>Carregando usuários...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <ScrollContainer>
        <HeaderContainer>
          <Title>Gerenciar Usuários</Title>
          <Subtitle>Administre os usuários da plataforma</Subtitle>
        </HeaderContainer>

        {/* Estatísticas dos usuários */}
        <UserStats stats={userStats} />

        {/* Botões de ação principais */}
        <ActionButtons
          onAddUser={navigateToAddUser}
          onRefresh={refreshUsers}
        />

        {/* Lista de usuários */}
        <SectionContainer>
          {users.length === 0 ? (
            <EmptyState
              icon="people-outline"
              iconType="material"
              message="Nenhum usuário cadastrado"
              subMessage="Os usuários aparecerão aqui após serem cadastrados"
            />
          ) : (
            users.map((userItem) => (
              <UserCard
                key={userItem.id}
                user={userItem}
                isCurrentUser={userItem.id === user?.id}
                onEdit={() => navigateToEditUser(userItem.id)}
                onDelete={() => deleteUser(userItem.id)}
              />
            ))
          )}
        </SectionContainer>

        {/* Botão voltar */}
        <ActionButtons
          onBack={navigateBack}
          showBackOnly
        />
      </ScrollContainer>
    </Container>
  );
};

export default UserManagementScreen;