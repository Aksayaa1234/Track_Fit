import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import { useState, useEffect } from "react";
import { usePostApi } from '../hooks/useApi';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  let [state, changeInput] = usePostApi("/api/login", null);

  useEffect(() => {
    //console.log(state.message);
    if (state?.message == 'valid user') {
      navigate("/");
    } else if (state?.message == 'invalid credentials') {
      setError(true);
    } else {
      setError(false); 
    }
  }, [state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeInput(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
    setError(false); 
  }

  return (
    <Box
      component="div"
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "6rem",
        marginLeft: "5%",
      }}
      sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: "3rem" } }}
    >
      <img src="../images/signin image.svg" alt="workout image" loading="lazy" width="50%" />
      <Box component="div" sx={{ width: { xs: "100%", md: "50%" } }}>
        <Box
          component="form"
          onSubmit={handleSubmit} 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ color: "white.main", fontWeight: 700 }}>
            LOGIN
          </Typography>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            type="email"
            required
            sx={{ backgroundColor: "white.main", width: "50%" }}
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{ width: "50%" }}>
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              required
              sx={{ backgroundColor: "white.main", width: "100%" }}
              value={formData.password}
              onChange={handleChange}
            />
            <Typography sx={{ padding: 0, margin: 0, display: error ? "block" : "none" }} color='red'>
              Invalid email or password
            </Typography>
          </div>
          <Button
            type="submit"
            sx={{
              borderRadius: "0.5rem",
              backgroundColor: "gold.main",
              padding: "0.5rem",
              paddingLeft: "1.2rem",
              paddingRight: "1.2rem",
              marginBottom: { xs: "2rem", md: "0rem" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                letterSpacing: ".1rem",
                fontWeight: 900,
              }}
            >
              Login
            </Typography>
          </Button>
          <Typography
            sx={{
              fontFamily: "monospace",
              letterSpacing: ".1rem",
              fontWeight: 900,
              color: "white.main",
            }}
          >
            Don't have an account yet?
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              <Typography component="span" sx={{ color: "gold.main", fontWeight: "bold" }}>
                {" "}
                Sign Up
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
