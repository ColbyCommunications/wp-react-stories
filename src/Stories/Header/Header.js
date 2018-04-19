import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchInput from './SearchInput';
import { CategoryPicker } from './CategoryPicker';
import { SearchIcon } from './SearchIcon';

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0 1.5rem;

  > div {
    flex: 0 0 100%;
    max-width: 100%;

    @media screen and (min-width: 768px) {
      flex: 0 0 50%;
      width: 50%;
      max-width: 50%;
    }
  }
`;

const StyledSearchInputContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 0.375rem;
    right: 1rem;
    width: 1.125rem;
    height: 1.125rem;
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Header = ({
  categoriesEndpoint,
  setCategories,
  setActiveCategory,
  activeCategory,
  categories,
  searchTerm,
  fetching,
  setSearchTerm,
}) => (
  <StyledHeader>
    <StyledSearchInputContainer>
      <SearchInput
        searchTerm={searchTerm}
        onSearchTermChange={searchTerm => {
          setSearchTerm(searchTerm);
        }}
      />
      <SearchIcon />
    </StyledSearchInputContainer>
    <CategoryPicker
      url={categoriesEndpoint}
      setCategories={setCategories}
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      categories={categories}
    />
  </StyledHeader>
);

Header.propTypes = {
  categoriesEndpoint: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
};