import theme from '../../../styles/theme';
import { UserRole } from '../types';

/**
 * Utilitários para manipulação de roles de usuários
 */

export const getRoleText = (role: UserRole): string => {
  switch (role) {
    case 'admin':
      return 'Administrador';
    case 'doctor':
      return 'Médico';
    case 'patient':
      return 'Paciente';
    default:
      return role;
  }
};

export const getRoleColor = (role: UserRole): string => {
  switch (role) {
    case 'admin':
      return theme.colors.primary;
    case 'doctor':
      return theme.colors.success;
    case 'patient':
      return theme.colors.info;
    default:
      return theme.colors.secondary;
  }
};

export const getRoleBackgroundColor = (role: UserRole): string => {
  return getRoleColor(role) + '20';
};

export const getRoleIcon = (role: UserRole): string => {
  switch (role) {
    case 'admin':
      return 'admin-panel-settings';
    case 'doctor':
      return 'local-hospital';
    case 'patient':
      return 'person';
    default:
      return 'person';
  }
};