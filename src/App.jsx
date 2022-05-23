import { useEffect, useState } from "react";
import { useTheme, useMediaQuery, CircularProgress } from "@mui/material";

import "./App.css";
import JsonData from "./data/data.json";
import { Header } from "./components/layout/header/Header";
import { Navigation } from "./components/layout/navigation/Navigation";
import { Features } from "./components/layout/features/Features";
import { About } from "./components/layout/about/About";
import { Contact } from "./components/layout/contact/Contact";

function App() {
  const [landingPageData, setLandingPageData] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobileMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => setLandingPageData(JsonData), []);

  return (
    <div className="App">
      {!landingPageData ? (
        <CircularProgress />
      ) : (
        <>
          <Navigation isMobile={isMobile} />
          <Header data={landingPageData.Header} isMobile={isMobile} />
          <Features data={landingPageData.Features} isMobile={isMobile} />
          <About
            data={landingPageData.About}
            isMobile={isMobile}
            isMobileMd={isMobileMd}
          />
          <Contact data={landingPageData.Contact} isMobile={isMobile} />
        </>
      )}
    </div>
  );
}

export default App;
