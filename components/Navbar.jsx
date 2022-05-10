import React from "react";
import Link from 'next/link';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  Tabs,
  TabList,
  Tab,
  Spacer,
  Menu, MenuButton, MenuList, MenuItem,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
  AiFillPhone,
} from "react-icons/ai";
import { BsFillCameraVideoFill, BsSearch } from "react-icons/bs";
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo1 from '../assets/images/logo.png';
import avatar1 from '../assets/images/avatar.png';


const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const router = useRouter();

  const goSearch = (locate) => {
    router.push(locate);
  }

  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <Image src={logo1} width={80} height={80} />
              <VisuallyHidden>Dave</VisuallyHidden>
            </chakra.a>
            
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button
                variant="solid"
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
                support@mobilies.io
              </Button>
              <Button
                variant="solid"
                leftIcon={<AiFillPhone />}
                size="sm"
              >
                +971-54-204-3611
              </Button>
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="User Photo"
              src={ avatar1 }
            />
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={0} borderBottomColor="transparent">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} onClick={(e) => goSearch('/')}>
              HOME
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} onClick={(e) => goSearch('/search')}>
              SEARCH
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} onClick={(e) => goSearch('/search?purpose=for-sale')}>
              BUY PROPERTY
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} onClick={(e) => goSearch('/search?purpose=for-rent')}>
              RENT PROPERTY
            </Tab>{" "}
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }} onClick={(e) => goSearch('/contactus')}>
              CONTACT US
            </Tab>
            <Tab isDisabled py={4} m={0}>
              ADVANCED
            </Tab>
          </TabList>
        </Tabs>
        <Spacer />
        <Box paddingRight='10px'>
          <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
            <MenuList>
              <Link href='/' passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href='/search' passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href='/search?purpose=for-sale' passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href='/search?purpose=for-rent' passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );

};

export default Navbar;
