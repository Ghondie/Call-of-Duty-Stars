import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField() {
  const [player1, setPlayer1] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setPlayer1(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <FormControl>
        <InputLabel htmlFor="Player1">Player 1</InputLabel>
        <Input
          id="Player1"
          value={player1}
          onChange={handleChange}
          aria-describedby="Player1-text"
        />
        <FormHelperText id="Player1-text">HEY BATTLE TAG</FormHelperText>
      </FormControl>
      
    </form>
  );
}