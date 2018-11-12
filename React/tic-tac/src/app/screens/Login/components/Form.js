import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import validate from '../validate.js';
import style from '../style.scss';

const renderField = ({ input, label, className, type, meta: { touched, error } }) => (
  <div className={style.field}>
    <label htmlFor="{label}">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && (error && <span className={style.alert}>{error}</span>)}
    </div>
  </div>
);

const SyncValidationForm = props => {
  const { handleSubmit, onSubmit, submitting, onClick } = props;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${style.login} ${style.fadeInDown} ${style.animated}`}
    >
      <Field name="email" type="email" component={renderField} label="Email" className={style.space} />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        className={style.space}
      />
      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`${style.space} ${style.submit}`}
          onClick={onClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

SyncValidationForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  onClick: PropTypes.func
};

export default reduxForm({
  form: 'syncValidation',
  validate
})(SyncValidationForm);
