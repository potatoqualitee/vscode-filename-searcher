import { expect } from 'chai';
import { convertWsFiles } from '../../../../webviews/Workspace/helpers/convertWsFiles';

suite('Webviews > Workspace > convertWsFiles():', () => {
  test('Returns an empty array if no files', () => {
    expect(convertWsFiles([], '')).to.eql([]);
  });

  test('Correctly converts the files', () => {
    expect(
      convertWsFiles(
        ['First Project.ps1', 'Wrong.ext', 'Second_Work-Space.ps1'],
        ''
      )
    ).to.eql([
      {
        file: 'First Project.ps1',
        isSelected: false,
        label: 'First Project',
        path: '',
      },
      {
        file: 'Second_Work-Space.ps1',
        isSelected: false,
        label: 'Second Work Space',
        path: '',
      },
    ]);
  });
});
