import { getGenresMovie } from "@/lib/loadFromAPI";
import { useAmp } from "next/amp";
import { useEffect, useState } from "react";

export const generateDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDay();
  const formattedDate = `${day} ${monthNames[month]}, ${year}`;
  return formattedDate;
};

export const generateGenres = (genreId, genres) => {
  const genresName = genreId?.map((genreId) => {
    const genre = genres?.find((genre) => genre.id === genreId);
    return genre ? genre.name : null;
  });

  return genresName ? genresName.join(" | ") : "";
};

export const convertToPercent = (value) => {
  const newValue = value * 10;
  return Math.round(newValue);
};

// export const getImageTrailerLink = (site, id) => {
//   const site = [
//     {
//       siteName: "Youtube",
//       imgUrl: "https://img.youtube.com/vi/uJMCNJP2ipI/0.jpg",
//     },
//   ];
// };

export const handleSelectedButton = (value, setValue) => {
  setValue(value);
};
