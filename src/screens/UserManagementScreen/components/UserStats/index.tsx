import React from 'react';
import { UserStats as UserStatsType } from '../../types';
import StatsCard from '../../../AdminDashboardScreen/components/StatsCard';
import theme from '../../../../styles/theme';
import { Container, SectionTitle } from './styles';

interface UserStatsProps {
  stats: UserStatsType;
}

const UserStats: React.FC<UserStatsProps> = ({ stats }) => {
  return (
    <Container>
      <SectionTitle>Estatísticas de Usuários</SectionTitle>
      
      <StatsCard
        icon="people"
        iconColor="#fff"
        backgroundColor={theme.colors.primary}
        number={stats.total}
        label="Total de Usuários"
      />
      
      <StatsCard
        icon="admin-panel-settings"
        iconColor="#fff"
        backgroundColor={theme.colors.warning}
        number={stats.admins}
        label="Administradores"
      />
      
      <StatsCard
        icon="local-hospital"
        iconColor="#fff"
        backgroundColor={theme.colors.success}
        number={stats.doctors}
        label="Médicos"
      />
      
      <StatsCard
        icon="person"
        iconColor="#fff"
        backgroundColor={theme.colors.info}
        number={stats.patients}
        label="Pacientes"
      />
    </Container>
  );
};

export default UserStats;