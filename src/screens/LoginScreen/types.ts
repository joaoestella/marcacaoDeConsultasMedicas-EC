export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
