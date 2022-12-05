import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCompetitions, getCompetitionsBySearch } from '../../../actions/competitions'
import { useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Paginate = ({ page }) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get('searchQuery');
  const { numberOfPages } = useSelector((state) => state.competitions);

  useEffect(() => {
    if (page) {
      if (searchQuery) {
        dispatch(getCompetitionsBySearch(searchQuery, page))
      } else {
        dispatch(getCompetitions(page))
      }
    };
  }, [page, searchQuery]);


  return (
    <Pagination xs={{ justifyContent: 'space-around' }} count={numberOfPages} page={Number(page) || 1} variant="outlined" color='primary'
      renderItem={(item) => (
        !searchQuery
          ? <PaginationItem {...item} component={Link} to={`/competitions?page=${item.page}`} />
          : <PaginationItem {...item} component={Link} to={`/competitions/search?searchQuery=${searchQuery}&page=${item.page}`} />
      )}
    />
  )
}

export default Paginate;