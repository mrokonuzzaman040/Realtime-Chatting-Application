"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { SignUpFormData, SignUpFormErrors } from "@/types/signup";

const SignUpForm = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        dateOfBirth: "",
    });

    const [errors, setErrors] = useState<SignUpFormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = (): SignUpFormErrors => {
        let formErrors: SignUpFormErrors = {};
        if (!formData.username) formErrors.username = "Username is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.password) formErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword)
            formErrors.confirmPassword = "Passwords do not match";
        if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required";
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
        <div className="max-w-lg mx-auto w-[450px] bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="dateOfBirth">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
