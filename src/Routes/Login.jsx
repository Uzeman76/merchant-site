import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../UserContext.jsx";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const userContext = useContext(UserContext);
    const [message, setMessage] = useState({ text: "", isError: false });
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("currentUser"));
        } catch {
            return null;
        }
    });

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        if (userContext?.setUser) {
            userContext.setUser(null);
        }
        setMessage({ text: "Vous avez été déconnecté.", isError: false });
    };

    const onSubmit = (data) => {
        const email = data.email.toLowerCase().trim();
        const stored = localStorage.getItem(`user_${email}`) || localStorage.getItem(email);

        if (!stored) {
            setMessage({ text: "Email ou mot de passe incorrect.", isError: true });
            return;
        }

        try {
            const userData = JSON.parse(stored);
            if (userData.password === data.password) {
                const user = { email: userData.email, name: userData.name };
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("currentUser", JSON.stringify(user));
                setCurrentUser(user);
                if (userContext?.setUser) {
                    userContext.setUser(user);
                }
                setMessage({ text: `Bienvenue ${userData.name} ! Vous êtes connecté.`, isError: false });
            } else {
                setMessage({ text: "Email ou mot de passe incorrect.", isError: true });
            }
        } catch (error) {
            console.error("Erreur de lecture :", error);
            setMessage({ text: "Erreur lors de la lecture des données utilisateur.", isError: true });
        }
    };

    return (
        <>
            <h2>Login Form</h2>

            {currentUser ? (
                <div style={{ marginBottom: "20px" }}>
                    <p style={{ color: "#2b8a3e" }}>
                        Connecté en tant que <strong>{currentUser.name}</strong> ({currentUser.email})
                    </p>
                    <button
                        type="button"
                        onClick={handleLogout}
                        style={{
                            backgroundColor: "#ff8787",
                            color: "#fff",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Se déconnecter
                    </button>
                </div>
            ) : (
                <form className="App" onSubmit={handleSubmit(onSubmit)}>
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
            )}

            {message.text && (
                <p style={{ color: message.isError ? "red" : "green", marginTop: "10px" }}>
                    {message.text}
                </p>
            )}
        </>
    );
}

export default Login;