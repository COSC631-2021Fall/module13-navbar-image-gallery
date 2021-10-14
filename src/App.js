import { Grid, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import movies from "./movies"
import TheatersIcon from '@material-ui/icons/Theaters';
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar position="static">
          <Toolbar>
            <IconButton href="/"><TheatersIcon /></IconButton>
            <Typography>Harry Potter Movies</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={6}>
          <ImageGallery items={
            movies().map(
              (movie) => {
                return {original: "/assets/" + movie.poster};
              }
            )
          } showPlayButton={false} />
      </Grid>
    </Grid>
  );
}

export default App;
