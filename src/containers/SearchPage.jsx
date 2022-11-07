import React, { useState, useEffect } from "react";
import { Box, Typography, ThemeProvider, Container, CircularProgress } from "@mui/material";
import theme from "../themes/Theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CardNews } from "../components/CardNews";
import Drawer from "../components/NavbarDrawer";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [searchNews, setSearch] = useState([]);
  const { searchValue } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSearch = await axios.get(`https://gnews.io/api/v4/search?q=${searchValue}&token=${process.env.REACT_APP_GNEWS_KEY}&lang=en`);
        setSearch(responseSearch.data.articles);
        console.log(setSearch);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    setLoading(false);
  }, [searchValue, setLoading]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Drawer />
      <Container sx={{ minHeight: "80vh" }}>
        <Box>
          <Typography variant="h5" sx={{ px: 5 }}>
            Search
          </Typography>
          <Box sx={{ mt: 5 }}>
            {loading ? (
              <CircularProgress />
            ) : searchNews.length === 0 ? (
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Keyword Not Found
              </Typography>
            ) : (
              searchNews.map((news) => {
                return <CardNews news={news} key={news.title} />;
              })
            )}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default SearchPage;
