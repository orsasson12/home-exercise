export interface IButtonProps {
  onClick?: () => void;
  text: string;
  severity?: ESeverity;
}

export enum ESeverity {
  Default = "default",
  Success = "success",
  Warning = "warning",
  Error = "error",
  Info = "info",
}
