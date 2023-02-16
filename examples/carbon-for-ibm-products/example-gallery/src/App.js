import './App.scss';
import React from 'react';

import { GalleryCard } from './GalleryCard';

import config from './gallery-config';
import { Search } from 'carbon-components-react';
import { useState } from 'react';

const App = () => {
  const [filteredConfig, setFilteredConfig] = useState(config);

  const handleSearch = (ev) => {
    if (!ev.target.value) {
      setFilteredConfig(config);
    } else {
      const filter = new RegExp(ev.target.value, 'i');
      setFilteredConfig(config.filter((item) => filter.test(item.label)));
    }
  };

  return (
    <div className="app carbon-theme--g90">
      <div className="app__container">
        <h1 className="app__title">
          Carbon for IBM Products - gallery of examples
        </h1>
        <Search
          className="app__filter"
          labelText="Find a Carbon for IBM Products example"
          onChange={handleSearch}
          placeholder="Filter sandboxes"
        />
        <div className="app__gallery">
          {filteredConfig.map((item, index) => (
            <GalleryCard
              className="app__gallery-item"
              key={index}
              title={item.label}
              url={item.url}
              target="_blank" // NOTE: _top and _parent do not seem to work in codesandbox
              thumbnail={item.thumbnail}
            />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className="app__gallery-item--dummy"
              key={`dummy--${index}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
