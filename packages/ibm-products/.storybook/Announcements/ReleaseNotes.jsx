/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo } from 'react';
import { Toc, TocList, TocItem, TocSections, TocSection } from '../Toc';
import { Tag, CodeSnippet } from '@carbon/react';
//import '../Toc/_toc.scss';

import './_release-notes-styles.scss';

// Dynamically import all markdown files from announcements folder
// Path is relative to this file
const announcementModules = import.meta.glob('./announcements/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});
console.log('announcementModules', announcementModules);

// Parse frontmatter from markdown content
const parseFrontmatter = (content) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { metadata: {}, content };
  }

  const [, frontmatterStr, markdownContent] = match;
  const metadata = {};

  // Parse YAML-like frontmatter
  const lines = frontmatterStr.split('\n');
  let currentKey = null;
  let currentArray = null;

  lines.forEach((line) => {
    const trimmed = line.trim();

    // Handle array items
    if (trimmed.startsWith('- ') && currentArray) {
      const value = trimmed.slice(2).trim();
      // Check if it's an object property
      if (value.includes(':')) {
        const [key, val] = value.split(':').map((s) => s.trim());
        if (!currentArray[currentArray.length - 1]) {
          currentArray.push({});
        }
        currentArray[currentArray.length - 1][key] = val;
      } else {
        currentArray.push(value);
      }
    }
    // Handle key-value pairs
    else if (trimmed.includes(':')) {
      const colonIndex = trimmed.indexOf(':');
      const key = trimmed.slice(0, colonIndex).trim();
      const value = trimmed.slice(colonIndex + 1).trim();

      if (value === '') {
        // Start of an array
        currentKey = key;
        currentArray = [];
        metadata[key] = currentArray;
      } else {
        metadata[key] = value;
        currentKey = null;
        currentArray = null;
      }
    }
  });

  return { metadata, content: markdownContent };
};

// Parse markdown and return React elements
const MarkdownRenderer = ({ content }) => {
  const lines = content.split('\n');
  const elements = [];
  let i = 0;
  let inCodeBlock = false;
  let codeContent = '';
  let codeLanguage = '';

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        codeContent = '';
      } else {
        inCodeBlock = false;
        elements.push(
          <CodeSnippet
            key={`code-${i}`}
            type="multi"
            feedback="Copied to clipboard"
            className="release-notes__code-snippet"
          >
            {codeContent.trim()}
          </CodeSnippet>
        );
        codeContent = '';
      }
      i++;
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      i++;
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      elements.push(<h3 key={`h3-${i}`}>{line.slice(4)}</h3>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={`h2-${i}`}>{line.slice(3)}</h2>);
    } else if (line.startsWith('# ')) {
      elements.push(<h1 key={`h1-${i}`}>{line.slice(2)}</h1>);
    }
    // Horizontal rule
    else if (line === '---') {
      elements.push(<hr key={`hr-${i}`} />);
    }
    // Lists
    else if (line.startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        const text = lines[i].slice(2);
        listItems.push(
          <li
            key={`li-${i}`}
            dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(text) }}
          />
        );
        i++;
      }
      elements.push(<ul key={`ul-${i}`}>{listItems}</ul>);
      continue;
    }
    // Paragraphs
    else if (line.trim()) {
      elements.push(
        <p
          key={`p-${i}`}
          dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(line) }}
        />
      );
    }

    i++;
  }

  return <>{elements}</>;
};

// Parse inline markdown (bold, italic, links, inline code)
const parseInlineMarkdown = (text) => {
  return text
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/`([^`]+)`/g, '<code>$1</code>');
};

const ReleaseNotes = () => {
  // Process all announcement files
  const announcements = useMemo(() => {
    const processed = Object.entries(announcementModules)
      .filter(([path]) => {
        // Skip README.md file
        const filename = path.split('/').pop();
        return filename !== 'README.md';
      })
      .map(([path, content]) => {
        const { metadata, content: markdownContent } =
          parseFrontmatter(content);
        const filename = path.split('/').pop().replace('.md', '');

        return {
          id: filename,
          title: metadata.title || 'Untitled Announcement',
          date: metadata.date || '',
          content: markdownContent,
          tags: metadata.tags || [],
          order: parseInt(metadata.order) || 999,
        };
      });

    // Sort by order field
    return processed.sort((a, b) => a.order - b.order);
  }, []);
  console.log('announcements', announcements);

  return (
    <div className="release-notes">
      <Toc>
        <div className="release-notes__container">
          <div className="release-notes__content">
            <div className="release-notes__header">
              <h1 className="release-notes__title">Announcements</h1>
              <p className="release-notes__subtitle">
                Stay informed about important updates, new features, and
                breaking changes in Carbon for IBM Products
              </p>
            </div>

            <TocSections className="release-notes__sections">
              {announcements.map((announcement) => (
                <TocSection
                  key={announcement.id}
                  className="release-notes__release"
                >
                  <div className="release-notes__section">
                    <div className="release-notes__markdown-content">
                      <MarkdownRenderer content={announcement.content} />
                    </div>
                  </div>
                </TocSection>
              ))}
            </TocSections>
          </div>

          <aside className="release-notes__sidebar">
            <div className="release-notes__toc">
              <h2 className="release-notes__toc-title">On this page</h2>
              <TocList>
                {announcements.map((announcement) => (
                  <TocItem key={announcement.id}>{announcement.title}</TocItem>
                ))}
              </TocList>
            </div>
          </aside>
        </div>
      </Toc>
    </div>
  );
};

export default ReleaseNotes;

// Made with Bob
