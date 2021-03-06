import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import { onChangeSelected } from '../../actions';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItems = ({ isActive, onNavClick, item }) => {
  const NavLiStyle = Styled(Link)`
    width: calc(100% / 3);
    padding: 1rem 0;
    text-align: center;
    color: ${isActive ? '#FFF' : '#0457AD'};
    border-bottom: ${isActive ? '4px solid #237cc5' : 'none'};
    cursor: ${isActive ? 'auto' : 'pointer'};
    text-decoration: none;
  `;

  return (
    <NavLiStyle to={`/${item.toLowerCase()}`} onClick={() => onNavClick(item)}>
      {item}
    </NavLiStyle>
  );
}

export default NavItems;
