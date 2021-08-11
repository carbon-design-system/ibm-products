import { settings } from 'carbon-components';
import { Tooltip } from 'carbon-components-react';

const { prefix } = settings;

const tooltipOne = () => {
  return (
    <Tooltip
      direction="bottom"
      showIcon={false}
      triggerClassName={`${prefix}--progress-label`}
      triggerText={'Topic name'}
      tooltipId="tooltipId-1">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
        consequuntur hic ratione aliquid cupiditate, nesciunt saepe iste
        blanditiis cumque maxime tenetur veniam est illo deserunt sint quae
        pariatur. Laboriosam, consequatur.
      </p>
    </Tooltip>
  );
};

const stepDataTest = [
  {
    label: 'Topic name',
    description: 'Topic name',
    secondaryLabel: 'Optional label',
  },
  {
    label: 'Partitions',
    description: 'Partitions',
  },
  {
    label: 'Message retention',
    description: 'Message retention',
  },
  {
    label: 'Step Three',
    description: 'Topic name',
    secondaryLabel: 'Optional label',
  },
  {
    label: 'Step Four',
    description: 'Partitions',
  },
  {
    label: 'Step Five',
    description: 'Message retention',
  },
];

export default stepDataTest;
