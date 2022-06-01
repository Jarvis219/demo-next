import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useRouter } from 'next/router';

const ProductCate = ({ data }) => {
  const router = useRouter();
  if (!data) return <div>Loading...</div>;

  const changeRouter = (id) => {
    router.push(`/products/detail/${id}`);
  };
  return (
    <div>
      <h2>Product Page</h2>
      <Container maxWidth="md">
        <Grid container spacing={3} gap={5} marginTop={2}>
          {data.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.imageIntro}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.introduce}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => changeRouter(item.id)} size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductCate;

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3005/products?categoryId=${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3005/products`);
  const data = await res.json();
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}
