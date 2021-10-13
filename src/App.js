import { Grid } from "@material-ui/core";
import movies from "./movies"

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <header>
          <h1>Harry Potter Movies</h1>
        </header>
      </Grid>
      <Grid item>
        <main>
          {
            movies().map((movie) => {
              return <img src={"/assets/" + movie.poster} width='200'></img>
            })
          }
        </main>
      </Grid>
    </Grid>
  );
}

export default App;
