import React, { createElement, useState } from 'react';
import { IViewProps } from './types';

import View from './view';

export const PhoneRegister: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [showCountrySearch, setShowCountrySearch] = useState<boolean>(false);

  const handleToogleShowCountrySearch = () => {
    setShowCountrySearch(!showCountrySearch);
  };

  const handleCloseCountrySearch = () => {
    setShowCountrySearch(false);
  };

  const handleSelectCountry = () => {
    handleCloseCountrySearch();
  };

  const viewProps: IViewProps = {
    handleToogleShowCountrySearch,
    handleSelectCountry,
    setPhone,
    phone,
    showCountrySearch,
  };

  return createElement(View, viewProps);
};
