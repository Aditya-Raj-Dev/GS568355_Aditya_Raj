import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useToast,
} from "@chakra-ui/react";
import gs_logo from "../Images/gsynergy_logo.jpeg";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { GoTriangleDown } from "react-icons/go";
import { logout } from "../store/Authentication/authSlice";

const Navbar: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log(isAuth, "isAuth Navbar");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("email"); // Clear session storage
    toast({
      title: "Logged out successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/login");
  };

  const VscAccountIcon = VscAccount as React.ElementType;
  const GoTriangleDownIcon = GoTriangleDown as React.ElementType;

  const storedEmail = sessionStorage.getItem("email");
  const email: string | null = storedEmail ? JSON.parse(storedEmail) : null;

  console.log("VscAccount:", VscAccount);
  console.log("Type of VscAccount:", typeof VscAccount);

  return (
    <Flex justifyContent="space-between" paddingLeft="20px" paddingRight="10px" height="100px">
      <Flex gap="40px">
        <Box display={{ base: "none", md: "block", lg: "block" }}>
          <Image
            src={gs_logo}
            alt="fnp"
            height="90px"
            width="90px"
            margin="10px auto"
            borderRadius="30px"
          />
        </Box>
      </Flex>
      <Flex alignItems="center">
        <Heading>Data Viewer App</Heading>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        alignItems="center"
      >
        <Box mr="15px"></Box>
        <Flex gap="10px" alignItems="center">
          {isAuth && (
            <Flex gap="10px">
              <VscAccountIcon size={24} fontWeight="bold" />
              <Menu>
                <MenuButton>
                  <GoTriangleDownIcon size={24} />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={handleLogout}
                    _hover={{
                      bg: "red.500",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    
                  >
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
          <Flex direction="column" textAlign="left">
            <Text>{email}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
