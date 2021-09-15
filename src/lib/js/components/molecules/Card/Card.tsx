import * as React from "react";
import { Card as MuiCard, CardActions, Link } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Truncate from "../../atoms/Truncate";
import { HideType } from "lib/types/types";
import Tag from "../../atoms/Tag";

interface Props {
  title: string;
  description?: string;
  image: string;
  link: string;
  hidedescription: HideType;
  hideimages: HideType;
  truncatedescription: string;
  tags: string[];
}
export default function Card({
  title,
  description,
  image,
  link,
  hidedescription,
  hideimages,
  truncatedescription,
  tags,
}: Props) {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <Link href={link} sx={{ textDecoration: "none" }}>
        <CardActionArea>
          {!hideimages ? (
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={title}
              sx={{
                borderBottom: "5px solid",
                borderBottomColor: "secondary.main",
              }}
            />
          ) : (
            ""
          )}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ minHeight: "42px" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Truncate
                description={description}
                hidedescription={hidedescription}
                truncatedescription={truncatedescription}
              />
            </Typography>
          </CardContent>
          {!tags.length ? (
            ""
          ) : (
            <CardActions>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </CardActions>
          )}
        </CardActionArea>
      </Link>
    </MuiCard>
  );
}
