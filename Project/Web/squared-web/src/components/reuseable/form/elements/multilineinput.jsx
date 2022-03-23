import React from "react";

const MultiLineInput = ({
	name,
	label,
	className,
	placeholder,
	labelClass,
	numOfRows,
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
				{label}{" "}
				{isRequired && <span className='primary-color-2 ml-1'> * </span>}
			</label>
			<div className='form-group'>
				<textarea
					className={className}
					rows={numOfRows}
					value={value}
					onChange={onChange}
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}></textarea>

				<span className={iconClassName}></span>
			</div>

			{error && <div className='alert alert-danger'>{error}</div>}
		</div>
	);
};

export default MultiLineInput;
