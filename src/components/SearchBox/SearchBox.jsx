// SearchBox.jsx
import {useId} from 'react';
import css from "../SearchBox/SearchBox.module.css";
import {Field, Form, Formik} from "formik";

const SearchBox = ({ searchTerm, onChange }) => {
    const searchId = useId();
    return (
        <Formik>
            <Form className={css.form}>
        <label className={css.input} htmlFor={searchId}>Search Contacts</label>
    <Field className={css.input}
        type="text"
        id={searchId}
            name="searchTerm"
            onChange={onChange}
        />
            </Form>
        </Formik>
    );
};

export default SearchBox;
