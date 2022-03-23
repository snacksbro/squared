import React, { Component } from "react";
import Joi from "joi-browser";

//import CoursesSelect from "./selectcourses";

import TextInputLabel from "./elements/textinputlabel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "./elements/input";
import MultiLineInput from "./elements/multilineinput";
import InputNoLabel from "./elements/inputnolabel";
//import RsvpSelect from "../select/rsvpselect";
//import RelationSelect from "../select/relationselect";

class Form extends Component {
	state = {
		data: {},
		errors: {},
	};
	//toast.configure()
	/*async componentDidMount() {
		toast.configure();
	}*/

	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);
		if (!error) return null;

		const errors = {};

		for (let item of error.details) errors[item.path[0]] = item.message;

		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);

		return error ? error.details[0].message : null;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		//get the values from the form
		// var emailAddress = this.emailAddress.current.value;
		// var password = document.getElementById('txtPassword').value;
		//call the server to save the changes

		const errors = this.validate();
		console.log(errors);

		toast.error(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;

		this.doSubmit();
	};

	handleChange = ({ currentTarget: input }) => {
		//input validation
		const errors = { ...this.state.errors };

		const errorMessage = this.validateProperty(input);

		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];
		//data seccount (model)
		const data = { ...this.state.data };

		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	renderButton(label, className) {
		return (
			<button disabled={this.validate()} className={className}>
				<b>{label}</b>
			</button>
		);
	}

	renderArrowButton(className) {
		return (
			<button disabled={this.validate()} className={className}>
				<span className='la la-arrow-right'></span>
			</button>
		);
	}

	renderInput(
		name,
		label,
		type,
		className,
		placeholder,
		labelClass,
		isFocused,
	) {
		const { data, errors } = this.state;

		return (
			<Input
				name={name}
				value={data[name]}
				label={label}
				labelClass={labelClass}
				className={className}
				type={type}
				isFocused={isFocused}
				placeholder={placeholder}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	}
	renderNoLabelInput(name, type, className, placeholder, isFocused) {
		const { data, errors } = this.state;

		return (
			<InputNoLabel
				name={name}
				value={data[name]}
				className={className}
				type={type}
				isFocused={isFocused}
				placeholder={placeholder}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	}
	//TextInputLabel
	renderTextInputLabel(
		name,
		label,
		type,
		className,
		placeholder,
		labelClass,
		isRequired,
		iconClassName,
	) {
		const { data, errors } = this.state;

		return (
			<TextInputLabel
				name={name}
				value={data[name]}
				label={label}
				labelClass={labelClass}
				className={className}
				type={type}
				isRequired={isRequired}
				placeholder={placeholder}
				error={errors[name]}
				onChange={this.handleChange}
				iconClassName={iconClassName}
			/>
		);
	}
	//MultiLineInput

	renderMultiLineInput(
		name,
		label,
		type,
		className,
		placeholder,
		labelClass,
		numOfRows,
		isRequired,
		iconClassName,
	) {
		const { data, errors } = this.state;

		return (
			<MultiLineInput
				name={name}
				value={data[name]}
				label={label}
				labelClass={labelClass}
				className={className}
				type={type}
				numOfRows={numOfRows}
				isRequired={isRequired}
				placeholder={placeholder}
				error={errors[name]}
				onChange={this.handleChange}
				iconClassName={iconClassName}
			/>
		);
	}

	//select dropdown list
	/*renderSelectCourses(name, label, options) {
		const { data, errors } = this.state;

		return (
			<CoursesSelect
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}*/

	/*	renderSelectRsvpOption(name, label, options) {
		const { data, errors } = this.state;

		return (
			<RsvpSelect
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}

	renderSelectRelationOption(name, label, options) {
		const { data, errors } = this.state;

		return (
			<RelationSelect
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}*/
}

export default Form;
