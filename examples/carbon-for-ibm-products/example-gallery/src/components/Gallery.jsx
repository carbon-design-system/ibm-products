import React, { useState, useEffect } from 'react';

import { GalleryCard } from './GalleryCard';
import { Search } from '@carbon/react';
import getConfig from '../gallery-config';

import './_Gallery.scss';

const blockClass = `gallery`;

export const Gallery = () => {
  const [config, setConfig] = useState(null);
  const [filteredConfig, setFilteredConfig] = useState([]);

  useEffect(() => {
    getConfig().then(result => {
        setConfig(result);
    });
  }, [])

  useEffect(() => {
    if (config) {
        setFilteredConfig(config);
    }
  }, [config])

  const handleSearch = (ev) => {
    if (!ev.target.value) {
      setFilteredConfig(config);
    } else {
      const filter = new RegExp(ev.target.value, 'i');
      setFilteredConfig(config.filter((item) => filter.test(item.label)));
    }
  };

  return (
    <div className={blockClass}>
      <div className={`${blockClass}__container`}>
        <h1 className={`${blockClass}__title`}>
          Carbon for IBM Products - gallery of examples
        </h1>
        <Search
          className={`${blockClass}__filter`}
          labelText="Find a Carbon for IBM Products example"
          onChange={handleSearch}
          placeholder="Filter sandboxes"
        />
        <div className={`${blockClass}__gallery`}>
          {filteredConfig.map((item, index) => (
            <GalleryCard
              className={`${blockClass}__gallery-item`}
              key={index}
              title={item.label}
              url={item.url}
              target="_blank" // NOTE: _top and _parent do not seem to work in codesandbox
              thumbnail={item.thumbnail}
            />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className={`${blockClass}__gallery-item--dummy`}
              key={`dummy--${index}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
