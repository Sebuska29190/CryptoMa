import React from "react";
import { Box, Typography } from "@mui/material";
import { GitHub, Twitter } from "@mui/icons-material"; // używamy Twitter jako X

const Footer = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "gold",
        textAlign: "center",
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      {/* Logo usunięte */}

      <Box display="flex" gap={2}>
        <a
          href="https://github.com/Sebuska29190"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "gold", fontSize: 30 }} />
        </a>
        <a
          href="https://www.x.com/cryptowithbuska"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter sx={{ color: "gold", fontSize: 30 }} />
        </a>
      </Box>

      <Typography
        variant="body2"
        sx={{ fontFamily: "Montserrat", fontSize: 14 }}
      >
        {currentDate}
      </Typography>

      <Typography
        variant="body2"
        sx={{ fontFamily: "Montserrat", fontSize: 14 }}
      >
        © {new Date().getFullYear()} CryptoMa. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
