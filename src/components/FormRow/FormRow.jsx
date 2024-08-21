function FormRow({ error, children, className }) {
  return (
    <div className={className}>
      {children.props.id && (
        <label htmlFor={children.props.id} className="block mb-2 text-gray-900">
          {children.props.id}:
        </label>
      )}

      {children}

      {error && (
        <div
          className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
}

export default FormRow;
