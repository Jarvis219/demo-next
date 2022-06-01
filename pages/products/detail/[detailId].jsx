import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';

const Detail = ({ data }) => {
  return (
    <div>
      <h2>Product detail Page</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={data.imageIntro}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.introduce}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ params }) {
  console.log('params: ', params);
  const res = await fetch(`http://localhost:3005/products/${params.detailId}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
