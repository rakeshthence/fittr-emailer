import { Column, Container, Row, Text } from "@react-email/components";
import * as React from "react";
import { footerStyle } from "./ui/style";

export default function Footer() {
  return (
    <Container style={footerStyle}>
      <Container>
        <Text style={{ textAlign: "center" }}>
          Join us on our mission to make 50 million people fit!
        </Text>
      </Container>
    </Container>
  );
}
