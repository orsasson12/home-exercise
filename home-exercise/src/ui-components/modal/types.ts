export interface IModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  title: string;
}