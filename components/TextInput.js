
const TextInput = ({
  type,
  name,
  id,
  placeholder,
  required,
  className,
  label,
  leftIcon,
  rightIcon,
  errorMessage,
  onPressRightIcon,
  ...otherProps
}) => {

  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        {leftIcon && (
          <svg
            className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={leftIcon} />
          </svg>
        )}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          className={`${
            leftIcon ? 'pl-10' : 'pl-2.5'
          } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500${className}`}
          {...otherProps}
        />
        {rightIcon && (
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={onPressRightIcon}
          >
            <path d={rightIcon} />
          </svg>

        )}
      </div>

      <p className='text-red-500'>{errorMessage}</p>

    </>
  );
};

export default TextInput;
