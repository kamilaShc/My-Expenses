import { useFormik } from "formik";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  repeatPassword: string;
}

interface RegisterFormValuesErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  login?: string;
  password?: string;
  repeatPassword?: string;
}

const validate = (values: RegisterFormValues) => {
  const errors: RegisterFormValuesErrors = {};
  if (!values.firstName) {
    errors.firstName = `First Name is required`;
  } else if (values.firstName.length > 30) {
    errors.firstName = "First Name cannot exceed 30 characters";
  } else if (values.firstName.length < 2) {
    errors.firstName = "First Name cannot be less than 2 characters";
  }

  if (!values.lastName) {
    errors.lastName = `Last Name is required`;
  } else if (values.lastName.length > 30) {
    errors.lastName = "Last Name cannot exceed 30 characters";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Last Name cannot be less than 2 characters";
  }

  if (!values.email) {
    errors.email = `Email is required`;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter valid email address";
  }

  if (!values.password) {
    errors.password = `Password is required`;
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password =
      "Password should be minimum 8 characters, containing at least 1 letter and 1 number";
  }

  if (values.repeatPassword !== values.password) {
    errors.repeatPassword = `Passwords do not match`;
  }
  return errors;
};

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control shadow-none"
          id="firstName"
          name="firstName"
          placeholder="Andrew"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <small className="text-danger">{formik.errors.firstName}</small>
        )}
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control shadow-none"
          id="lastName"
          name="lastName"
          placeholder="Nickelson"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <small className="text-danger">{formik.errors.lastName}</small>
        )}
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          type="text"
          className="form-control shadow-none"
          id="email"
          name="email"
          placeholder="andrew.mickelson@gmail.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <small className="text-danger">{formik.errors.email}</small>
        )}
      </div>
      <div className="form-group">
        <label>Login</label>
        <input
          type="text"
          className="form-control shadow-none"
          id="login"
          name="login"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
        />
        {formik.touched.login && formik.errors.login && (
          <small className="text-danger">{formik.errors.login}</small>
        )}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control shadow-none"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {!formik.errors.password && !formik.touched.password && (
          <small>
            Password should be minimum 8 characters, containing at least 1
            letter and 1 number
          </small>
        )}
        {formik.touched.password && formik.errors.password && (
          <small className="text-danger">{formik.errors.password}</small>
        )}
      </div>
      <div className="form-group">
        <label>Repeat Password</label>
        <input
          type="password"
          className="form-control shadow-none"
          id="repeatPassword"
          name="repeatPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword && (
          <small className="text-danger">{formik.errors.repeatPassword}</small>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Register
      </button>
    </form>
  );
};
