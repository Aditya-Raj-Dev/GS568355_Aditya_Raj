import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Image,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store"; // Import Redux store type
import { login } from "../store/Authentication/authSlice";
import { useNavigate } from "react-router-dom";
import gs_logo from "../Images/gsynergy_logo.jpeg";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toast = useToast();
 const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials
    const validEmail = "adi@gmail.com";
    const validPassword = "12345";
  
    if (email === validEmail && password === validPassword) {
      dispatch(login({ email, token: "12345" }));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } else {
      if (email !== validEmail) {
        toast({
          title: "Email is incorrect",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else if (password !== validPassword) {
        toast({
          title: "Password is incorrect",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        borderRadius="10px"
        width={{ base: "100%", md: "80%", lg: "400px" }}
        p="20px"
        bg="white"
        mt="120px"
      >
        <Image
          src={gs_logo}
          alt="logo"
          height="100px"
          width="150px"
          margin="10px auto"
          borderRadius="30px"
        />
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button w="100%" mt="15px" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
