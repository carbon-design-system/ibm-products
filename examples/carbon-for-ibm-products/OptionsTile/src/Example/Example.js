// cspell:words autorecovery

import React, { useState } from "react";

// ----------------------------------------------------
// This is an example showing use of the
// OptionsTile component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { OptionsTile } from "@carbon/ibm-products";
import { Button, Dropdown, FormGroup, Tile, Toggle } from "@carbon/react";

import "./_example.scss";

const times = [
  "1 minute",
  "2 minutes",
  "5 minutes",
  "10 minutes",
  "20 minutes",
  "30 minutes",
  "1 hour",
  "2 hours",
  "10 hours",
  "24 hours"
];

const thresholds = ["100 MB", "500 MB", "1 GB", "2 GB"];

const id = "options-tile-example";

export const Example = () => {
  const [enabled, setEnabled] = useState(true);
  const [time, setTime] = useState(times[3]);
  const [disableForLargeFiles, setDisableForLargeFiles] = useState(true);
  const [threshold, setThreshold] = useState(thresholds[1]);

  function getSummary() {
    const text = [];

    const timeSummary = time.match(/\d* ./)[0].replace(" ", "");
    text.push(timeSummary);

    if (disableForLargeFiles) {
      text.push(`Threshold: ${threshold}`);
    }

    return text.join(" | ");
  }

  const summary = getSummary();

  return (
    <div className='container'>
      <OptionsTile
        heading='Auto recovery'
        summary={summary}
        enabled={enabled}
        onToggle={setEnabled}
      >
        <Dropdown
          id={`${id}--autorecovery--type`}
          titleText='Time between each backup'
          label='Time between each backup'
          items={times}
          selectedItem={time}
          onChange={({ selectedItem }) => {
            setTime(selectedItem);
          }}
          disabled={!enabled}
          light
        />
        <FormGroup
          className='recovery-location'
          legendText='Auto recovery file location'
          hasMargin={false}
        >
          ~/Library/Application Support/IBM/Product/autoRecovery
          <br />
          <Button
            className='recovery-location__button'
            kind='tertiary'
            disabled={!enabled}
          >
            Change
          </Button>
        </FormGroup>
        <Toggle
          id={`${id}--autorecovery--threshold-toggle`}
          labelA='Disable auto-recovery for large files'
          labelB='Disable auto-recovery for large files'
          size='sm'
          toggled={disableForLargeFiles}
          onToggle={setDisableForLargeFiles}
          disabled={!enabled}
        />
        {disableForLargeFiles && (
          <Tile className='threshold-tile'>
            <Dropdown
              id={`${id}--autorecovery--threshold-dropdown`}
              titleText='File size threshold'
              label='File size threshold'
              items={thresholds}
              selectedItem={threshold}
              onChange={({ selectedItem }) => {
                setThreshold(selectedItem);
              }}
              disabled={!enabled}
            />
          </Tile>
        )}
      </OptionsTile>
    </div>
  );
};
