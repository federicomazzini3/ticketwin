import React, {useEffect} from 'react' 
import {Pagination, PaginationItem} from '@mui/material'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetitions } from '../../actions/competitions'

const Paginate = ({page}) => {
  const dispatch = useDispatch();

  const {numberOfPages } = useSelector((state) => state.competitions);

  useEffect(() => {
    if(page) dispatch(getCompetitions(page));
  }, [page]);

  return (
    <Pagination 
    xs={{justifyContent: 'space-around'}} 
    count={numberOfPages} 
    page={Number(page) || 1}
    variant="outlined"
    color='primary'
    renderItem={(item) => (
        <PaginationItem {...item} 
        component={Link}
        to={`/competitions?page=${item.page}`}
        />
    )}
    />
  )
}

export default Paginate;