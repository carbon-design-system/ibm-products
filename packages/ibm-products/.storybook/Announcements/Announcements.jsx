/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { OptionsTile } from '../../src/components/OptionsTile';
import { Tag } from '@carbon/react';
import TearsheetAnnouncement from './TEARSHEET_ANNOUNCEMENT.md?raw';
import CanaryRemovalAnnouncement from './CANARY_REMOVAL_ANNOUNCEMENT.md?raw';
import './_storybook-styles.scss';

// Simple markdown to HTML converter for basic formatting
const parseMarkdown = (markdown) => {
  return markdown
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />')
    .replace(
      /\[(.*?)\]\((.*?)\)/gim,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/```(.*?)\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(?!<[h|u|o|p|l])(.*$)/gim, '<p>$1</p>');
};

// Announcement data structure
const announcements = [
  {
    id: 'canary-removal-v2-75',
    title:
      'Important Update: Changes to non-stable components and removal of canary mechanism',
    date: 'v2.75.0',
    impact: 'high',
    category: 'Breaking Change',
    summary:
      'Removal of canary mechanism - Action required for non-stable components',
    content: CanaryRemovalAnnouncement,
  },
  {
    id: 'tearsheet-update-2026',
    title: 'New Composable Tearsheet component',
    date: 'June 2026',
    impact: 'medium',
    category: 'Breaking Change',
    summary: 'Important updates to Tearsheet component structure',
    content: TearsheetAnnouncement,
  },
];

const getImpactTag = (impact) => {
  const impactConfig = {
    high: { type: 'red', label: 'High Impact' },
    medium: { type: 'orange', label: 'Medium Impact' },
    low: { type: 'blue', label: 'Low Impact' },
  };

  const config = impactConfig[impact] || impactConfig.low;
  return <Tag type={config.type}>{config.label}</Tag>;
};

const getCategoryTag = (category) => {
  const categoryConfig = {
    'Breaking Change': { type: 'red' },
    Release: { type: 'purple' },
    Feature: { type: 'green' },
    Deprecation: { type: 'orange' },
    Security: { type: 'magenta' },
  };

  const config = categoryConfig[category] || { type: 'gray' };
  return <Tag type={config.type}>{category}</Tag>;
};

const Announcements = () => {
  return (
    <div className="announcements__container">
      <div className="announcements__header">
        <h1 className="announcements__title">Important Announcements</h1>
        <p className="announcements__description">
          Stay informed about important updates, breaking changes, and new
          features in Carbon for IBM Products. Click on each announcement to
          read more details.
        </p>
      </div>

      <div className="announcements__list">
        {announcements.map((announcement) => (
          <OptionsTile
            key={announcement.id}
            title={
              <div className="announcements__tile-title">
                <span>{announcement.title}</span>
                <span className="announcements__tile-date">
                  {announcement.date}
                </span>
              </div>
            }
            summary={
              <div className="announcements__tile-summary">
                {getImpactTag(announcement.impact)}
                {getCategoryTag(announcement.category)}
                <span className="announcements__tile-summary-text">
                  {announcement.summary}
                </span>
              </div>
            }
            size="xl"
            className="announcements__tile"
          >
            <div
              className="announcements__content"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(announcement.content),
              }}
            />
          </OptionsTile>
        ))}
      </div>
    </div>
  );
};

export default Announcements;

// Made with Bob
