interface FormFieldProps {
  id: string
  register: any
  error: any
  placeholder: string
  type: string
}

export const FormField = ({
  id,
  register,
  error,
  placeholder,
  type,
}: FormFieldProps) => (
  <div className="form-field">
    <div className="flex items-center border-b border-line py-2">
      <input
        {...register}
        id={id}
        className="form-input-auth"
        type={type}
        autoComplete="off"
        placeholder={placeholder}
      />
    </div>
    {error && (
      <p className="error-response" style={{ margin: 0 }}>
        {error}
      </p>
    )}
  </div>
)
