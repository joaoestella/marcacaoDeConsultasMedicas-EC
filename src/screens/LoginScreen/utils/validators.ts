/**
 * Utilitários para validação de formulários
 */

export const validateEmail = (email: string): string | undefined => {
  if (!email.trim()) {
    return 'Email é obrigatório';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Email inválido';
  }
  
  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return 'Senha é obrigatória';
  }
  
  if (password.length < 6) {
    return 'Senha deve ter pelo menos 6 caracteres';
  }
  
  return undefined;
};