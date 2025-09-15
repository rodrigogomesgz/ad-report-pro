import { Input } from "@mantine/core";

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: "text" | "email" | "password";
};

export function TextInput({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  type = "text" 
}: Props) {
  return (
    <Input.Wrapper label={label} error={error} required={required}>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </Input.Wrapper>
  );
}