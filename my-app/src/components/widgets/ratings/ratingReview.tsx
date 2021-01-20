import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from '../../../store/store';

import ReviewsList from './Subcomponents/reviewsList';
import SortComponent from './Subcomponents/sortComponent';
import ProductBreakdown from './Subcomponents/productBreakdown';
import RatingBreakdown from './Subcomponents/ratingBreakdown';
import CharacteristicsBar from './Subcomponents/characteristicsBar'

import {getReviews} from '../../../actions/ratingReview/getReviewsAction';
import {getReviewsMeta} from '../../../actions/ratingReview/getReviewsMetaDataAction'

var ProductReviewsComponent = () => {
  const dispatch = useDispatch();
  // const productReviewsState = useSelector((state: RootStore) => state.reviewsInfo);
  // const productState = useSelector((state: RootStore) => state.singleProduct);

  useEffect(()  => {
    dispatch(getReviews('11001'));  // TODO: BASED ON PRODUCT INFO! hardcoded for now
    dispatch(getReviewsMeta(11001)); // TODO: BASED ON PRODUCT INFO!
  }, []);

  return (
    <div className='ratings'>
      <ProductBreakdown />
      <RatingBreakdown />
      <SortComponent />
      <CharacteristicsBar />
      <ReviewsList />
    </div>

  );
}

export default ProductReviewsComponent;