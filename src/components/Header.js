// import React, { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faGithub,
//   faLinkedin,
//   faMedium,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";
// import { Box, HStack,VStack } from "@chakra-ui/react";

// const socials = [
//   {
//     icon: faEnvelope,
//     url: "bereketzewde989@gmail.com",
//   },
//   {
//     icon: faGithub,
//     url: "https://github.com/BereketZz",
//   },
//   {
//     icon: faLinkedin,
//     url: "www.linkedin.com/in/bereket-zewde",
//   },
//   {
//     icon: faMedium,
//     url: "https://medium.com/@bereketzewde989",
//   },
//   {
//     icon: faStackOverflow,
//     url: "https://stackoverflow.com/users/20560431/bereket",
//   },
// ];

// const Header = () => {
//   const handleClick = (anchor) => () => {
//     const id = `${anchor}-section`;
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <Box
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       translateY={0}
//       transitionProperty="transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"
//       backgroundColor="#18181b"
//     >
//       <Box color="white" maxWidth="1280px" margin="0 auto">
//         <HStack
//           px={16}
//           py={4}
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <nav>
//             <HStack spacing="24px">
//       {socials.map((s) => {

//               return <a href={s.url}> <FontAwesomeIcon icon={s.icon} size="2x" /></a>  
//             })}


//             </HStack>
      
//           </nav>
//           <nav>
//             <HStack spacing={8}>
              
//                 <a href="#projects-section" >Projects</a>
//                  <a href="#contactme-section" >Contact Me</a>
              
//             </HStack>
//           </nav>
//         </HStack>
//       </Box>
//     </Box>
//   );
// };
// export default Header;

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    id:1,
    icon: faEnvelope,
    url: "bereketzewde989@gmail.com",
  },
  {
    id:2,
    icon: faGithub,
    url: "https://github.com/BereketZz",
  },
  {
    id:3,
    icon: faLinkedin,
    url: "www.linkedin.com/in/bereket-zewde",
  },
  {
    id:4,
    icon: faMedium,
    url: "https://medium.com/@bereketzewde989",
  },
  {
    id:5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/20560431/bereket",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const header = headerRef.current;

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down
      header.style.transform = "translateY(-200px)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing="24px">
              {socials.map((s, index) => (
                <a href={s.url} key={s.id}>
                  <FontAwesomeIcon icon={s.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
