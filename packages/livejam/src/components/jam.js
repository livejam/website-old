import React from "react";
import JamSession from "./jam-session";

export default ({ pageContext }) => {
  return (
    <JamSession
      event={pageContext.event}
      coverImage={pageContext.coverImage}
      hosts={pageContext.hosts}
    />
  );
};
