
import {AppBar,Toolbar, Typography} from "@mui/material";
const Header = () => {

  return (
    <>
      <AppBar position="sticky" >
        <Toolbar>
          <Typography variant="h4" component="h4">
              CANVA-CLONE
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
