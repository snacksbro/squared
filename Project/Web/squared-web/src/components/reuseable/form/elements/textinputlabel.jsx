import React from "react";

const TextInputLabel = ({
	name,
	label,
	className,
	placeholder,
	labelClass,
	isRequired,
	iconClassName,
	value,
	onChange,
	type,
	error,
}) => {
	return (
		<div className='input-box'>
			<label className={labelClass}>
				{label}
				{isRequired && <span className='primary-color-2 ml-1'> * </span>}
			</label>
			<div className='form-group'>
				<input
					className={className}
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
				<span className={iconClassName} style={{ color: "green" }}></span>
			</div>

			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default TextInputLabel;
