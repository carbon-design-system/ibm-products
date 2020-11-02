import * as FileHelper from './FileHelper';

describe('FileHelper', () => {
  describe('getExtensionFromFilename', () => {
    it('returns the expected output for a file with an extension', () => {
      expect(FileHelper.getExtensionFromFilename('foo.jpg')).toEqual('jpg');
      expect(FileHelper.getExtensionFromFilename('foo.bar.txt')).toEqual('txt');
      expect(FileHelper.getExtensionFromFilename('foobar')).toEqual(undefined);
    });
  });

  describe('hasValidFilename', () => {
    it('should return true for a valid filename', () => {
      expect(FileHelper.hasValidFilename('valid')).toEqual(true);
    });
    it('should return false for an invalid filename', () => {
      expect(FileHelper.hasValidFilename('***')).toEqual(false);
    });
  });

  describe('hasValidExtension', () => {
    it('returns true for valid extension', () => {
      expect(FileHelper.hasValidExtension('txt', ['txt'])).toEqual(true);
    });
    it('returns false for invalid extension', () => {
      expect(FileHelper.hasValidExtension('bar', ['txt'])).toEqual(false);
    });
    it('returns true for wildcard extension', () => {
      expect(FileHelper.hasValidExtension('txt', ['*'])).toEqual(true);
      expect(FileHelper.hasValidExtension('blah', ['*'])).toEqual(true);
      expect(FileHelper.hasValidExtension('', ['*'])).toEqual(true);
    });
  });

  describe('parseFileFromUrl', () => {
    it('returns the filename for a full url', () => {
      expect(FileHelper.parseFileFromUrl('http://foo.com/foo.png')).toEqual(
        'foo.png'
      );
    });
  });
});
