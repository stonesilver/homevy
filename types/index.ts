export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  inputs?: Record<string, string>;
};
