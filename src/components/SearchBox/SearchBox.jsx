import React from 'react';
import { Formik, FormikForm, FormikField, ErrorMessage } from 'formik';

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
      <FormikForm onSubmit={onSubmit} className="form">
        <FormikField
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className="button">
          Search video
          {/* <ButtonLabel className="button-label"></ButtonLabel> */}
        </button>

        <ErrorMessage name="searchImg" component="div" />
      </FormikForm>
    </Formik>
  );
};
export default SearchBox;
