import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";

import { loginIllustration, logo } from "../../assets/images";
import { loginSchema } from "../../schemas/login.schema";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: async (values) => {
      console.log(values);

      // later:
      // const response = await login(values.userId, values.password);
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Left */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#F8FAFC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={loginIllustration}
          alt="login illustration"
        />
      </Box>

      {/* Right */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#fff",
          borderLeft: "0.5px solid #60A5FA",
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "510px",
          }}
        >
          <img src={logo} alt="logo" />

          <Typography
            variant="h4"
            sx={{
              mt: 4,
              mb: 2,
            }}
          >
            Login
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#64748B",
              mb: 4,
            }}
          >
            Use your company provided Login credentials
          </Typography>

          <TextField
            fullWidth
            label="User ID"
            name="userId"
            value={formik.values.userId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.userId &&
              Boolean(formik.errors.userId)
            }
            helperText={
              formik.touched.userId &&
              formik.errors.userId
            }
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            sx={{ mt: 3 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.password &&
              Boolean(formik.errors.password)
            }
            helperText={
              formik.touched.password &&
              formik.errors.password
            }
          />

          <Typography
            sx={{
              mt: 2,
              color: "#2563EB",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Forgot password?
          </Typography>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              height: "48px",
              backgroundColor: "#5988EF",
              borderRadius: "12px",

              "&:hover": {
                backgroundColor: "#4F7EE4",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;