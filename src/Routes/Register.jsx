import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState({ text: "", isError: false });

    const onSubmit = (data) => {
        const email = data.email.toLowerCase().trim();
        const existingUser = localStorage.getItem(`user_${email}`) || localStorage.getItem(email);

        if (existingUser) {
            setMessage({ text: "Cet email est déjà enregistré !", isError: true });
            return;
        }

        const userData = {
            name: data.name.trim(),
            email: email,
            password: data.password,
        };

        localStorage.setItem(`user_${email}`, JSON.stringify(userData));
        setMessage({ text: `${data.name} a été inscrit(e) avec succès ! Vous pouvez vous connecter.`, isError: false });
        reset();
    };

    return (
        <>
            <h2>Registration Form</h2>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                />
                {errors.name && <span style={{ color: "red" }}>*Name* is mandatory</span>}

                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />
                {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                />
                {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}

                <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
            </form>

            {message.text && (
                <p style={{ color: message.isError ? "red" : "green", marginTop: "10px" }}>
                    {message.text}
                </p>
            )}
        </>
    );
}

export default Register;