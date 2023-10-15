import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = { query: '' };
const SearchBox = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    handleSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <Formik initialValues={initialValues}>
      <Form onSubmit={onSubmit} className="form">
        <Field
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="button">
          Search video
        </button>
        <ErrorMessage name="searchImg" component="div" />
      </Form>
    </Formik>
  );
};
export default SearchBox;
