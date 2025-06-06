import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { signin } from "./service/ApiService";
import { Link } from "react-router-dom";

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password")
        //ApitService의 signin 메서드를 사용해 로그인
        signin({username:username, password:password});
    };

    return(
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="아이디"
                            name="username"
                            autoComplete="username"
                            style={{ marginTop: '3%' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            style={{ marginTop: '3%' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit"  fullWidth variant="contained" color="primary" style={{ marginTop: '3%' }} >
                            로그인
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/signup" variant="body2">
                            계정이 없습니까? 여기서 가입하세요.
                        </Link>
                    </Grid>
            </form>
        </Container>
    );

};

export default Login;