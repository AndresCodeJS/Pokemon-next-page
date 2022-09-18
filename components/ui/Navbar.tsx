import React from "react";
import { Text, Spacer, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: theme?.colors.gray200.value,
        height: "100px",
        marginBottom: "30px",
      }}
    >
      <div style={{ marginLeft: 20 }}>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
          alt="Icono de la imagen"
          width={70}
          height={70}
        />
      </div>

      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            ókemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }}></Spacer>
      <NextLink href="/favorites" passHref>
        <Link css={{marginRight:'30px'}}>
          <Text color="white">Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
