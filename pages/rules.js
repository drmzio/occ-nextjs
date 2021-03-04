import * as React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import PageHeader from '../src/components/PageHeader';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Rules() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader title="Rules" subtitle="Last Updated June 25, 2020" />
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>A. General Composure</Typography>
          <Divider />
          <Typography component="p">
            <ol>
              <li>Be nice and respectful towards everyone. Excessive swearing, rudeness and harassment is not tolerated.</li>
              <li>Do not spam or advertise.</li>
              <li>Observers should never give tactical information to players or intentionally disrupt game play.</li>
              <li>Follow any directions given by a Overcast Community staff member. If you believe a staff member has directed you wrongly, please email <a href="#">brott@oc.tc</a>.</li>
            </ol>
          </Typography>
        </Container>
      </Box>
    </div>
  )
}
