"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface ForgotPasswordFormData {
  identifier: string; // This will be used for username or email
}

interface ForgotPasswordFormErrors {
  identifier?: string;
}

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    identifier: "",
  });

  const [errors, setErrors] = useState<ForgotPasswordFormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): ForgotPasswordFormErrors => {
    let formErrors: ForgotPasswordFormErrors = {};
    if (!formData.identifier) formErrors.identifier = "Username or Email is required";
    return formErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form (e.g., send data to API)
      console.log("Form data submitted:", formData);
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Reset Your Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="identifier">
            Username or Email
          </label>
          <input
            type="text"
            name="identifier"
            id="identifier"
            className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
            value={formData.identifier}
            onChange={handleChange}
          />
          {errors.identifier && <p className="text-red-500 text-sm mt-1">{errors.identifier}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
