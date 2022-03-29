//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export { v4 as uuid } from 'uuid';
import {
  getExtensionFromFilename,
  hasValidFilename,
  hasValidExtension,
} from '../../component_helpers/FileHelper';

export const FILE_UPLOAD_STATUS = {
  EDIT: 'edit',
  UPLOADING: 'uploading',
  COMPLETE: 'complete',
};

export function countFiles(files) {
  let invalid = 0;
  let uploading = 0;
  let total = 0;
  for (let fileToUpload of files) {
    total++;
    if (fileToUpload.invalid) {
      invalid++;
    }
    if (fileToUpload.status === FILE_UPLOAD_STATUS.UPLOADING) {
      uploading++;
    }
  }
  const finished = total - invalid - uploading;

  return { invalid, uploading, total, finished };
}

const statusScore = [
  FILE_UPLOAD_STATUS.COMPLETE,
  FILE_UPLOAD_STATUS.UPLOADING,
  FILE_UPLOAD_STATUS.EDIT,
];

export function sortFiles(a, b, numFiles) {
  let aIdx = a.index / numFiles + statusScore.indexOf(a.status);
  if (a.invalid) {
    aIdx += statusScore.length + 1;
  }
  let bIdx = b.index / numFiles + statusScore.indexOf(b.status);
  if (b.invalid) {
    bIdx += statusScore.length + 1;
  }
  return aIdx === bIdx ? 0 : aIdx < bIdx ? 1 : -1;
}

export function validateFileAdded(
  fileToUpload,
  props,
  getInvalidExtensionText
) {
  if (fileToUpload.url && props.allowInvalidFilenameInUrl) {
    return { invalid: false };
  }
  if (fileToUpload.file.size > props.maxFileSize) {
    return {
      invalid: true,
      errorSubject: props.maxFileSizeSubject,
      errorBody: props.maxFileSizeMessage,
    };
  }
  const ext = getExtensionFromFilename(fileToUpload.file.name);

  if (props.extensionRequired && !ext) {
    return {
      invalid: true,
      errorSubject: props.invalidFileText,
      errorBody: props.extensionIsRequiredText,
    };
  }

  if (!hasValidFilename(fileToUpload.file.name)) {
    return {
      invalid: true,
      errorSubject: props.invalidFileText,
      errorBody: props.invalidFileNameText,
    };
  }
  if (!hasValidExtension(ext, props.validExtensions)) {
    return {
      invalid: true,
      errorSubject: props.invalidFileText,
      errorBody: getInvalidExtensionText(),
    };
  }

  return { invalid: false };
}
