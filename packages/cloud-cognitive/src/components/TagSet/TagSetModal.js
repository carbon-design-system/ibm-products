//
// Copyright IBM Corp. 2021, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  Search,
} from 'carbon-components-react';

import { pkg } from '../../settings';
const componentName = 'TagSetModal';
const blockClass = `${pkg.prefix}--tag-set`;

export const TagSetModal = ({
  allTags,
  heading,
  onClose,
  open,
  searchLabel,
  searchPlaceholder,
}) => {
  const [filteredModalTags, setFilteredModalTags] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const newFilteredModalTags = [];
    if (open) {
      allTags.forEach((tag, index) => {
        const dataSearch = (tag.props['data-search'] || '').toLocaleLowerCase();
        const contentsAsString = tag.props.children
          .toString()
          .toLocaleLowerCase();
        if (
          (dataSearch && dataSearch.indexOf(search) > -1) ||
          contentsAsString.indexOf(search) > -1
        ) {
          newFilteredModalTags.push(
            <span key={index} className={`${blockClass}-show-all-tags`}>
              {React.cloneElement(tag)}
            </span>
          );
        }
      });
    }
    setFilteredModalTags(newFilteredModalTags);
  }, [allTags, open, search]);

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <ComposedModal
      className={`${blockClass}__show-all-tags-modal`}
      size="sm"
      {...{ open, onClose }}>
      <ModalHeader title={heading}>
        <Search
          data-modal-primary-focus
          className={`${blockClass}__show-all-tags-modal-search`}
          labelText={searchLabel}
          placeholder={searchPlaceholder}
          onChange={handleSearch}
          size="lg"
        />
      </ModalHeader>
      <ModalBody
        className={`${blockClass}__show-all-tags-modal-body-2`}
        hasForm>
        <div className={`${blockClass}__show-all-tags-modal-content`}>
          {filteredModalTags}
        </div>
      </ModalBody>
      <div className={`${blockClass}__show-all-tags-modal-fade`} />
    </ComposedModal>
  );
};

TagSetModal.propTypes = {
  allTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

TagSetModal.displayName = componentName;
