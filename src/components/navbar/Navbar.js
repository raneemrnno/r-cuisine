import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LogoutIcon,
} from "@chakra-ui/icons";
import SignUp from "../SignUp";
import { useState } from "react";
import LoginForm from "../LoginForm";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const getUserName = localStorage.getItem("userName");
  const handleLogOut = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const signInOpen = () => setSignInIsOpen(true);
  const signInClose = () => setSignInIsOpen(false);

  const [userNameIsOpen, setUserNameIsOpen] = useState(false);
  const userNameOpen = () => setUserNameIsOpen(true);
  const userNameClose = () => setUserNameIsOpen(false);

  return (
    <Box top={0} position={"sticky"} zIndex={1}>
      <Flex
        bg={useColorModeValue("red.900", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        //minH={"60px"}
        minH={"10vh"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Image
          display={{ base: "none", md: "inline-flex" }}
          boxSize={"15%"}
          objectFit="contain"
          src={require("../../images/logo.png")}
          alt={"R cuisine"}
        />
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {getUserName ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={14}
          >
            <Popover
              isOpen={userNameIsOpen}
              onOpen={userNameOpen}
              onClose={userNameClose}
              trigger={"click"}
              placement={"bottom-start"}
            >
              <PopoverTrigger>
                <Button
                  color={"white"}
                  // as={"a"}
                  fontSize={"md"}
                  fontWeight={400}
                  variant="link"
                  href={"#"}
                  rightIcon={
                    <Icon
                      as={ChevronDownIcon}
                      transition={"all .25s ease-in-out"}
                      transform={userNameIsOpen ? "rotate(180deg)" : ""}
                      w={6}
                      h={6}
                    />
                  }
                >
                  {getUserName}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                //boxSize={"3xs"}
                p={4}
                rounded={"xl"}
                maxW={"3xs"}
              >
                <Button
                  variant={"ghost"}
                  p={2}
                  rounded={"md"}
                  _hover={{ bg: "red.50" }}
                  fontWeight="800"
                  onClick={handleLogOut}
                  rightIcon={<FiLogOut />}
                >
                  Log Out
                </Button>
              </PopoverContent>
            </Popover>
            <Link to="/cart">
              <Image
                src={require("../../images/cart.png")}
                alt="shopping cart"
                w={"20"}
                h={"10"}
                borderLeft={"1px"}
                borderColor={"gray"}
              />
            </Link>
          </Stack>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Popover
              isOpen={signInIsOpen}
              onOpen={signInOpen}
              onClose={signInClose}
              placement="right"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button
                  color={"white"}
                  as={"a"}
                  fontSize={"md"}
                  fontWeight={400}
                  variant={"link"}
                >
                  Sign In
                </Button>
              </PopoverTrigger>
              <PopoverContent zIndex={4} p={5}>
                <PopoverArrow bg="white" />
                <PopoverCloseButton />
                <Stack spacing={4}>
                  <LoginForm />
                </Stack>
              </PopoverContent>
            </Popover>

            <SignUp />
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  //const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href ?? "#"}>
                <Text
                  color={
                    linkColor
                    /* navItem.label === "Home" && window.location.pathname === "/"
                      ? "#F5793B"
                      : navItem.label === "Recipes" &&
                        (window.location.pathname === "/break_fast" ||
                          window.location.pathname === "/break_fast/oriental" ||
                          window.location.pathname === "/break_fast/western")
                      ? "#F5793B"
                      : navItem.label === "Recipes" &&
                        (window.location.pathname === "/lunch" ||
                          window.location.pathname === "/lunch/oriental" ||
                          window.location.pathname === "/lunch/western")
                      ? "#F5793B"
                      : navItem.label === "Recipes" &&
                        (window.location.pathname === "/desserts" ||
                          window.location.pathname === "/desserts/oriental" ||
                          window.location.pathname === "/desserts/western")
                      ? "#F5793B"
                      : linkColor */
                  }
                  p={3}
                  borderRadius={5}
                  fontSize={"lg"}
                  fontWeight="500"
                  _hover={{
                    textDecoration: "none",
                    color: "black",
                    bg: "#F5793B",
                    borderRadius: "5",
                    //p: 3,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link to={href}>
      <Text
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("red.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "red.900" }}
              fontSize="lg"
              fontWeight="800"
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Text>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        //href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Link to={href ?? "#"}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Recipes",
    children: [
      {
        label: "Breakfast",
        subLabel: "oriental and westren breakfast recipes",
        href: "/break_fast",
      },
      {
        label: "Lunch",
        subLabel: "oriental and westren lunch recipes",
        href: "/lunch",
      },
      {
        label: "Desserts",
        subLabel: "oriental and westren desserts recipes",
        href: "/desserts",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about_us",
  },
];
