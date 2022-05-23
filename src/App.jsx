import { useEffect, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

import "./App.css";
import JsonData from "./data/data.json";
import { Header } from "./components/layout/header/Header";
import { Navigation } from "./components/layout/navigation/Navigation";
import { Features } from "./components/layout/features/Features";
import { About } from "./components/layout/about/About";
import { Contact } from "./components/layout/contact/Contact";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobileMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Navigation isMobile={isMobile} />
      <Header data={JsonData.Header} isMobile={isMobile} />
      <Features data={JsonData.Features} isMobile={isMobile} />
      <About
        data={JsonData.About}
        isMobile={isMobile}
        isMobileMd={isMobileMd}
      />
      <Contact data={JsonData.Contact} isMobile={isMobile} />
    </div>
  );
}

export default App;
