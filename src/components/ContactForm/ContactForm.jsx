import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

export default function ContactForm  ({ onAddContact })  {
    const nameId = useId();
    const numberId = useId();

    const UserSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Name should be at least 3 characters")
            .max(50, "Name should not exceed 50 characters")
            .required("Name is required"),
        number: Yup.string()
            .min(3, "Number should be at least 3 characters")
            .max(50, "Number should not exceed 50 characters")
            .required("Number is required"),
    });

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
                onAddContact(values.name, values.number);
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.group}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId} />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>
                <button className={css.addContact} type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
};


