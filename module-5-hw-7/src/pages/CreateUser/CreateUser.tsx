import React, { ReactElement, FC, useEffect, useState, useContext } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Container
} from '@mui/material';
import { AppStoreContext } from "../../App";

const CreateUser: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { authStore } = useContext(AppStoreContext);
  
  const handleRegistration = () => {
    if (!firstName || !lastName || !email) {
      setError('All fields must be filled.');
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format. Must look like example@com');
      return;
    }

    setIsRegistered(true);
    setError(null);
  };

  if (!authStore.isLogined) {
    return (
      <p
        style={{
          fontSize: "24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        You need to Log In or Sign Up to view this page.
      </p>
    );
  }

  return (
    <Container maxWidth="md">
      <Card style={{ margin: '20px', textAlign: 'center' }}>
        <CardContent style={{ padding: '20px' }}>
          <Typography variant="h4">Create User Form</Typography>
          <form>
            <Box display="flex" padding={2} flexDirection="column" gap={2}>
              <TextField
                label="Lastname"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                label="Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleRegistration}
                style={{ marginTop: '20px' }}
              >
                Submit
              </Button>
            </Box>
          </form>

          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}

          {isRegistered && (
            <Typography variant="body1">
              User {lastName} {firstName}has been created.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreateUser;
