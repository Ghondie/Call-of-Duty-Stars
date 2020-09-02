


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Image from '../images/Banner.png'

const useStyles = makeStyles((theme) => ({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    flexGrow: 1,
    backgroundColor: '#000000',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div >
      <AppBar className={classes.root} position="static">
        <Toolbar>
            
      <img src={Image}/> 
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Button >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}






// import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// // import Stars from "../images/Banner.png"

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
// // }));

// export default function DenseAppBar() {
// //   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton edge="start" className={classes.media}   image = "../images/Banner.png"  color="inherit" aria-label="menu">
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }