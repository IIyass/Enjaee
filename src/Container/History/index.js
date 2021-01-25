import React, { useEffect, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Style from './style';
import BodyContainer from '../../Common/Body';
import DumbHistoryComponent from '../../Components/History';
import SearchInput from '../../Components/UI/SearchInput';
import SortInput from '../../Components/UI/SortInput';
import { getMyHistory, goToPrivateRoom } from '../../store/History/action';

const History = (props) => {
  const { getMyHistory, goToPrivateRoom } = props;

  const dispatch = useDispatch()
  const Loading = useSelector((state) => state.HistoryReducer.Loading);
  const MyHistory = useSelector((state) => state.HistoryReducer.MyHistory)


  const getMyHistoryCall = useCallback(
    () => dispatch(getMyHistory),
    [dispatch, getMyHistory]
  );

  useEffect(() => {
    getMyHistoryCall()
  }, [getMyHistoryCall])

  console.log(MyHistory)

  return Loading ? <h1>Loading ...</h1> :
    <Style.Wrapper as={BodyContainer}>
      <Style.SearchBar>
        <SearchInput placeholder="Search" name="Search" iconSearch />
        <SortInput width="150px" height="40px" />
      </Style.SearchBar>

      <DumbHistoryComponent
        HistoryData={MyHistory}
        goToPrivateRoom={goToPrivateRoom}
      />
    </Style.Wrapper>
};

export default connect(null,
  {
    getMyHistory,
    goToPrivateRoom
  })(History);
