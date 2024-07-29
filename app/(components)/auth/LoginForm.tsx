"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginFormData {
    identifier: string;
    password: string;
}

interface LoginFormErrors {
    identifier?: string;
    password?: string;
}

const LoginForm = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        identifier: "",
        password: "",
    });

    const [errors, setErrors] = useState<LoginFormErrors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = (): LoginFormErrors => {
        let formErrors: LoginFormErrors = {};
        if (!formData.identifier) formErrors.identifier = "Username or Email is required";
        if (!formData.password) formErrors.password = "Password is required";
        return formErrors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setLoading(true);
            const result = await signIn("credentials", {
                redirect: false,
                identifier: formData.identifier,
                password: formData.password,
            });

            setLoading(false);
            if (result?.error) {
                setErrors({ identifier: result.error });
            } else {
                setErrors({});
                router.push("/chat"); // Redirect to a protected route
            }
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Log In to Your Account</h2>
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
                <button
                    type="submit"
                    className={`w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Log In"}
                </button>
                <div className="text-center">
                    <Link href="/forgot-password" className="text-cyan-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
