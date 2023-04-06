import React, { createElement, useState } from 'react';
import { IViewProps } from './types';

import View from './view';

export const PhoneRegister: React.FC = () => {
  const [showCountrySearch, setShowCountrySearch] = useState<boolean>(false);

  const handleToogleShowCountrySearch = () => {
    setShowCountrySearch((prevState) => !prevState);
  };

  const handleCloseCountrySearch = () => {
    setShowCountrySearch(false);
  };

  const handleSelectCountry = () => {
    handleCloseCountrySearch();
  };

  const viewProps: IViewProps = {
    handleToogleShowCountrySearch,
    handleCloseCountrySearch,
    handleSelectCountry,
    showCountrySearch,
  };

  return createElement(View, viewProps);
};
