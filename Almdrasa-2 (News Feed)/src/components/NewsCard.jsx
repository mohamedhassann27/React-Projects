import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";


export default function NewsCard({ article}) {
//   console.log(loading);

    return (
        <>
        {article && (
            <Card className="my-3">
            <CardActionArea>
                {article.urlToImage && <CardMedia
                component="img"
                image={article.urlToImage}
                alt="green iguana"
                loading="lazy"
                className="h-80 object-fill hover:scale-105 transition duration-300"
                />}
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {article.description}
                </Typography>
                {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography> */}
                </CardContent>
            <p className="px-4">Auther: {article.author}</p>
            <p className="px-4 mb-4 mt-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
            </CardActionArea>
            {/* <CardActions> */}
            {/* <Button size="small" color="primary">
            Share
            </Button> */}
            {/* </CardActions> */}
            </Card>
        )}
        </>
    );
}
