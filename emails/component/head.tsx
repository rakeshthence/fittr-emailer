import { Head as ReactEmailHead, Font } from "@react-email/components";
import * as React from "react";
export default function Head() {
  return (
    <ReactEmailHead>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </ReactEmailHead>
  );
}
