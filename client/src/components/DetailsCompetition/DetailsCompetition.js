import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { getCompetition } from '../../actions/competitions'
import { Typography, Box } from '@mui/material'

const DetailsCompetition = () => {
  const { competition } = useSelector((state) => state.competitions);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCompetition(id))
  }, [id]);
  if (!competition) return null;

  return (
    <Box>
      <Typography variant='h1'>{competition.productName} details</Typography>
    </Box>
  )
}

export default DetailsCompetition