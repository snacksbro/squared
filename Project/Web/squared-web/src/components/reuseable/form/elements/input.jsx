import React from "react";

const Input = ({
	name,
	label,
	className,
	placeholder,
	labelClass,
	isFocused,
	value,
	onChange,
	type,
	error,
}) => {
	return (
		<div className='form-group'>
			<label className={labelClass} htmlFor={name}>
				{label}
			</label>

			<input
				autoFocus={isFocused}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				id={name}
				name={name}
				type={type}
				className={className}
			/>

			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default Input;
