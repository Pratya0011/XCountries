import React, { useEffect, useState } from "react";
import axios from "axios";
import { ICState } from "./helper";
import { Grid, Paper, Typography } from "@mui/material";

function CountryList() {
  const [countryList, setCountryList] = useState<Array<ICState>>([]);
  useEffect(() => {
    getCountryList();
  }, []);
  const getCountryList = async () => {
    try {
      const { status, data } = await axios.get(
        `https://xcountries-backend.azurewebsites.net/all`
      );
      if (status === 200) {
        setCountryList(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Grid display="flex" flexWrap="wrap" gap={2}>
      {countryList?.length > 0 ? (
        countryList?.map((country: ICState, index: number) => (
          <Grid
            component={Paper}
            mt={2}
            sx={{ width: "100px", height: "fit-content" }}
          >
            <img
              src={country?.flag}
              alt={country?.name}
              height={50}
              width={50}
            />
            <Typography>{country?.name}</Typography>
          </Grid>
        ))
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default CountryList;
