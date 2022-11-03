import "./App.css";
import "typeface-roboto";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const headerFooterStyle = {
  padding: 8,
  textAlign: "center",
};

const navStyle = {
  padding: 16,
  textAlign: "center",
};

const navStyle = { marginLeft: 5 };

function App() {
  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={headerFooterStyle}>
            <Typography>Header</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
