import React from 'react'
import { Grow, Container, Grid } from '@mui/material'
import Competitions from '../Competitions/Competitions'
import Form from '../Form/Form'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCompetitions } from '../../actions/competitions'

const DebugCompetitionForm = () => {

  const[currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompetitions());
  }, [dispatch]);
  return (
    
    <Grow in>
    <Container>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}> <Competitions setCurrentId={setCurrentId}/> </Grid>
        <Grid item xs={12} sm={4}> <Form currentId={currentId} setCurrentId={setCurrentId}/> </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default DebugCompetitionForm