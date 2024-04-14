export const login = (req, res, next) =>{
    res.send("Login");
    console.log("Login Route");
}
export const logout = (req, res, next) =>{
    console.log("Logout Route");
}
export const signup = (req, res, next) =>{
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

    } catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}