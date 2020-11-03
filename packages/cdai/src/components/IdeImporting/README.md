# IdeImporting Component

## Purpose

An opinionated upload or import component. Supports the following use cases:

- uploading a single file
- uploading multiple files
- specifing a file to upload via url
- specifing multiple file to upload via url
- importing a single file
- importing multiple files
- specifing a file to import via url
- specifing multiple file to import via url

## Importing vs Uploading

This component supports two styles of handling files.

**Uploading a file** or immediately taking the content of the file and sending
it to a server.

or

**Importing a file** or immediately opening the file, allowing the browser and
or a server to modify the content, before further handling.

The main visual or user experience distinction in the component is how the
indication of loading appears. For the import style, the component will
immediately display the "edit mode" of a file supplied by the user, allowing the
browser to read the file afterward. In the upload style, it is encouraged to
immediately send the file to the server upon the `onFileAdded` event.

## Example

Below is an example on how to handle files being added by the component.

```js
// this is the typical "import" style
// with custom validation
function MyImportingExample({ onFilesChanged }) {
  const props = {
    validExtensions: ['json'],
    onFileAdded: async (info) => {
      try {
        // note: the IdeImporting component
        // will show a spinner while awaiting
        // for this promise
        const raw = await readFile(info.file);
        const parsed = JSON.parse(raw);
      } catch (e) {
        if (isValidFile(parsed)) {
          // note the ':' separates the error header from the body:
          const header = 'File Failed Validation';
          const body = getValidationError(parsed);
          throw new Error(`${header}:${body}`);
        }
        throw e;
      }
      // allow other components to know
      // that the list of files changed
      onFilesChanged(e);
    },
  };

  return <IdeImporting {...props} />;
}

// this is the typical "upload" style
// with custom validation
function MyUploadExample({ onFilesChanged }) {
  const props = {
    validExtensions: ['json'],
    mode: 'uplaod',
    onFileAdded: async (info) => {
      try {
        // note: the IdeImporting component
        // will show a spinner while awaiting
        // for this promise
        await uploadFile(info.file);
      } catch (e) {
        if (isServerError(e)) {
          // note the ':' separates the error header from the body:
          const header = 'Server Error';
          const body = getErrorBody(e);
          throw new Error(`${header}:${body}`);
        }
        throw e;
      }
      // allow other components to know
      // that the list of files changed
      onFilesChanged(e);
    },
  };

  return <IdeImporting {...props} />;
}
```

## Change history

| Date       | Change                              | Contributed by / Product                          |
| ---------- | ----------------------------------- | ------------------------------------------------- |
| 11/22/2019 | First contribution of the component | Ritchie Martori (martori@us.ibm.com), API Connect |
