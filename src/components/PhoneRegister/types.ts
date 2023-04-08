type IViewProps = {
  handleToogleShowCountrySearch: () => void;
  handleSelectCountry: () => void;
  setPhone: (newState: string) => void;
  showCountrySearch: boolean;
  phone: string;
};

export { IViewProps };
