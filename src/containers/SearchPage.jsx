import React, { useState, useEffect } from "react";
import { Box, Typography, ThemeProvider, Container } from "@mui/material";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSearch = await axios.get(`https://gnews.io/api/v4/search?q=${searchValue}&token=0dcd7f431e9522047ef1cbd7432dc772&lang=en`);
        setSearch(responseSearch.data.articles);
        console.log(setSearch);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [searchValue]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Drawer />
      <Container>
        <Box>
          <Typography variant="h5" sx={{ px: 5 }}>
            Search
          </Typography>
          <Box>
            {searchNews.length === 0 ? (
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                Kata Kunci Tidak Ditemukan
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
