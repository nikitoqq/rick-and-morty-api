import {
  Card,
  styled,
  Typography,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import { NavLink } from "react-router";

export const CharacterCard = styled(Card)`
  display: flex;
  flex-direction: row;
  width: 600px;
  min-height: 220px;
  margin: 13.5px;
  border-radius: 0.5rem;
  flex-wrap: wrap;
`;

export const CharacterContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  flex-grow: 1;
`;

export const CharacterLocation = styled(Typography)`
  text-decoration: none;
  font-size: 18px;
`;

export const CharacterLinkName = styled(NavLink)`
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 25px;
  margin-bottom: 4px;
`;

export const CharacterTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
  margin-top: 0.6rem;
`;

export const CharacterTypographyStatus = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export const Image = styled(CardMedia)`
  min-height: 220px;
  background-position: center;
`;

export const ImageWrapper = styled(Box)`
  flex-grow: 1;
  min-width: 220px;
`;

export const Circle = styled(Box)`
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgb(85, 204, 68);
  background-color: rgb(214, 61, 46);
  background-color: rgb(158, 158, 158);
  border-radius: 50%;
  margin-right: 0.375rem;
`;

export const StatusBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const PaginationButton = styled(Button)`
  width: 80px;
  height: 100%;
  background-color: #9e9e9e;
  border-radius: 0.5rem;
  margin: 0px 20px;
`;
