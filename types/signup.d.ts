export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
}

export interface SignUpFormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  dateOfBirth?: string;
}
