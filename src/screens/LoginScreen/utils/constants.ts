export const LOGIN_CONSTANTS = {
  MIN_PASSWORD_LENGTH: 6,
  DEMO_CREDENTIALS: [
    { role: 'Admin', email: 'admin@teste.com', password: '123456' },
    { role: 'Médico', email: 'medico@teste.com', password: '123456' },
    { role: 'Paciente', email: 'paciente@teste.com', password: '123456' },
  ],
  MESSAGES: {
    WELCOME: 'Bem-vindo ao App de Consultas Médicas',
    SUBTITLE: 'Faça login para acessar sua conta',
    LOGIN_SUCCESS: 'Login realizado com sucesso!',
    LOGIN_ERROR: 'Erro ao fazer login',
    FIRST_ACCESS: 'Primeiro acesso? Cadastre-se para começar.',
  },
};