import {
  Card,
  styled,
  Link,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";

export const CharacterCard = styled(Card)`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  width: 600px;
  height: 220px;
  background-color: #3c3e44;
  margin: 13.5px;
`;

export const CharacterContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CharacterLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  
`;

export const CharacterLinkName = styled(CharacterLink)`
  font-size: 27px;
  font-weight: 800;
`;

export const CharacterTypography = styled(Typography)`
  color: #9e9e9e;
  font-size: 16px;
  font-weight: 500;
`;

export const CharacterTypographyStatus = styled(CharacterTypography)`
  color: white;
  font-weight: 500;
`;

export const Image = styled(CardMedia)`
  height: 100%;
  width: 229.2px;
  font-weight: 500;
`;
