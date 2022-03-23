import React from "react";

const InputNoLabel = ({
	name,
	className,
	placeholder,
	isFocused,
	value,
	onChange,
	type,
	error,
}) => {
	return (
		<div className='form-group'>
			<input
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

export default InputNoLabel;
