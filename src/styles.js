import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    margin: 0,
    position: 'absolute',
    padding: 0,
    height: '100%',
    minHeight: 980,
    minWidth: '100%',
    top: 0,
    left: 0,
  },
  logoWrapper: {
    padding: 20,
  },
  logoContainer: {
    height: 50,
    width: 245,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Nunito Sans',
    marginTop: 30,
  },
  subtitle: {
    fontFamily: 'Nunito Sans',
    marginTop: 15,
    marginBottom: 25,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 75,
  },
  testButtonContainer: {
    padding: 25,
    minHeight: 100,
    height: 175,
    minWidth: 100,
    width: 100,
  },
});

export default useStyles;
