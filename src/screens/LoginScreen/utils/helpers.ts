/**
 * Funções auxiliares para a tela de login
 */

import { Alert } from 'react-native';
import { LOGIN_CONSTANTS } from './constants';

/**
 * Mostra alerta de sucesso no login
 */
export const showLoginSuccess = () => {
  Alert.alert(
    'Sucesso!',
    LOGIN_CONSTANTS.MESSAGES.LOGIN_SUCCESS,
    [{ text: 'OK' }]
  );
};

/**
 * Mostra alerta de erro no login
 */
export const showLoginError = (message: string) => {
  Alert.alert(
    LOGIN_CONSTANTS.MESSAGES.LOGIN_ERROR,
    message,
    [{ text: 'OK' }]
  );
};

/**
 * Formata email para lowercase e remove espaços
 */
export const formatEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

/**
 * Verifica se as credenciais são válidas para demonstração
 */
export const isDemoCredentials = (email: string, password: string): boolean => {
  const formattedEmail = formatEmail(email);
  
  return LOGIN_CONSTANTS.DEMO_CREDENTIALS.some(
    cred => cred.email === formattedEmail && cred.password === password
  );
};