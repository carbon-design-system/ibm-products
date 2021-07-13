//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import {
  BreadcrumbItem,
  Column,
  Grid,
  Header,
  HeaderName,
  Row,
  Tab,
  Tabs,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from 'carbon-components-react';
import {
  Printer16,
  Security24,
  Settings16,
  VolumeMute16,
} from '@carbon/icons-react';

import { pkg, carbon } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { ActionBarItem } from '../ActionBar';
import { PageHeader } from '.';
const storybookPrefix = getStorybookPrefix(pkg, PageHeader.displayName);

import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './PageHeader.mdx';

const storyClass = 'page-header-stories';

export default {
  title: `${storybookPrefix}/${PageHeader.displayName}`,
  component: PageHeader,
  subcomponents: {
    ActionBarItem,
  },
  parameters: { styles, layout: 'fullscreen', docs: { page: mdx } },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
};

const demoTableData = [
  {
    Index: 'C8205413-BD94-0B62-DB0A-BE26CF8C60CD',
    Date: '1623141365',
    Location: 'PU',
    Severity: 5,
    Description: 'in, dolor. Fusce feugiat. Lorem ipsum dolor',
  },
  {
    Index: '99E2445E-ABA8-D82C-E27E-D310710B69E2',
    Date: '1596722603',
    Location: 'Bremen',
    Severity: 1,
    Description: 'lorem, eget mollis lectus pede et risus. Quisque',
  },
  {
    Index: 'ACAB4718-34A4-0AFE-04EC-A0F3E9E21A57',
    Date: '1639566096',
    Location: 'BO',
    Severity: 3,
    Description: 'sem mollis dui, in sodales',
  },
  {
    Index: '135B7753-9F66-E22E-8676-EF3668CBDF10',
    Date: '1647283084',
    Location: 'Uttar Pradesh',
    Severity: 3,
    Description: 'Nulla eu',
  },
  {
    Index: 'C64D19CE-CE64-800C-184A-944E047E172F',
    Date: '1602146543',
    Location: 'Kursk Oblast',
    Severity: 2,
    Description: 'ac metus vitae velit egestas lacinia. Sed congue, elit',
  },
  {
    Index: 'A31C9F7D-3616-9A67-7D53-BCBBFC2CDA61',
    Date: '1593796323',
    Location: 'Balochistan',
    Severity: 2,
    Description: 'eget lacus. Mauris non dui nec urna suscipit nonummy.',
  },
  {
    Index: 'ED7F215C-741C-18E3-87F0-DE0F4C50070B',
    Date: '1637178454',
    Location: 'La Libertad',
    Severity: 1,
    Description: 'neque. Sed eget lacus. Mauris non dui nec',
  },
  {
    Index: '8B66BEED-97D1-27D5-18CD-ECBC9A480687',
    Date: '1652452708',
    Location: 'Iowa',
    Severity: 3,
    Description: 'vel quam dignissim pharetra. Nam',
  },
  {
    Index: '2ABF8998-F9C0-0ABC-E75D-6A502E33E521',
    Date: '1614954617',
    Location: 'AN',
    Severity: 1,
    Description: 'porttitor interdum. Sed auctor odio a purus.',
  },
  {
    Index: 'FFE73A56-17A9-A793-DFC0-4B57112F6FFB',
    Date: '1646549056',
    Location: 'Västra Götalands län',
    Severity: 5,
    Description: 'luctus lobortis. Class aptent taciti sociosqu ad litora',
  },
  {
    Index: '5B399653-3FF5-7B0E-AE57-9226EC3A7EA7',
    Date: '1632780292',
    Location: 'ME',
    Severity: 2,
    Description: 'adipiscing fringilla,',
  },
  {
    Index: 'BC179299-8855-5E8B-5277-3B37E951895F',
    Date: '1622539348',
    Location: 'MO',
    Severity: 2,
    Description: 'Donec',
  },
  {
    Index: '3F31AB56-AA49-5D10-0734-8C5DB02425F9',
    Date: '1628252209',
    Location: 'Santa Catarina',
    Severity: 3,
    Description: 'scelerisque',
  },
  {
    Index: 'ABB9CE22-403A-BDCC-ED7D-AD96C0587589',
    Date: '1601782720',
    Location: 'CAM',
    Severity: 3,
    Description: 'gravida sit amet, dapibus id, blandit at, nisi. Cum sociis',
  },
  {
    Index: '0DE70D65-1070-00A5-B73D-CE0AC900C4FA',
    Date: '1621610200',
    Location: 'ON',
    Severity: 3,
    Description: 'ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc',
  },
  {
    Index: '8E2F3A1D-6C28-2273-6D0A-E1245B2E8C1F',
    Date: '1597267405',
    Location: 'North Jeolla',
    Severity: 5,
    Description: 'consequat',
  },
  {
    Index: '0C0B097B-EE24-0671-E52C-EBF1441B0EE5',
    Date: '1646114204',
    Location: 'Sin',
    Severity: 5,
    Description: 'tempor',
  },
  {
    Index: '9397A68B-8E47-0BD8-39E0-8A3CAF25DACF',
    Date: '1647070995',
    Location: 'Ontario',
    Severity: 3,
    Description: 'mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse',
  },
  {
    Index: '069DB804-03D6-DD94-A6DC-4AADC1A996F3',
    Date: '1641675511',
    Location: 'KT',
    Severity: 3,
    Description:
      'amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis',
  },
  {
    Index: '11BA4D0D-C772-F209-2675-5BCE027FCA82',
    Date: '1645891481',
    Location: 'Piura',
    Severity: 1,
    Description: 'eu metus. In lorem. Donec elementum, lorem ut aliquam',
  },
  {
    Index: '4D2BE116-EF81-7A0F-E198-DEC7C7084448',
    Date: '1631123505',
    Location: 'Şan',
    Severity: 2,
    Description:
      'Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare',
  },
  {
    Index: '0F0960E3-8CAE-5A00-FA17-BDFF613B7342',
    Date: '1642915055',
    Location: 'QC',
    Severity: 1,
    Description: 'mollis dui,',
  },
  {
    Index: 'D4B0CD3B-5862-4426-C6EB-B33C12B0CB60',
    Date: '1652481921',
    Location: 'Guerrero',
    Severity: 3,
    Description: 'egestas a,',
  },
  {
    Index: '780186AA-AE3C-B89C-E32A-0BAC180F1FEF',
    Date: '1633181020',
    Location: 'MA',
    Severity: 2,
    Description: 'mauris,',
  },
  {
    Index: '81A202F0-910B-CB1C-C951-5B42302516B8',
    Date: '1634847647',
    Location: 'BE',
    Severity: 2,
    Description: 'Nullam feugiat placerat',
  },
  {
    Index: '83259163-5FC1-C8AF-7BB6-ED6B8D83918C',
    Date: '1620030546',
    Location: 'PU',
    Severity: 3,
    Description:
      'eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus.',
  },
  {
    Index: 'A22D4D92-E856-84CD-2BF7-D2C1FC36C48B',
    Date: '1647006523',
    Location: 'Gilgit Baltistan',
    Severity: 2,
    Description: 'erat. Etiam',
  },
  {
    Index: 'B650DAE3-1492-0149-CE45-4CCA212B9A52',
    Date: '1603272706',
    Location: 'Manitoba',
    Severity: 1,
    Description: 'nulla magna,',
  },
  {
    Index: '9C879040-26B8-B79A-6F01-B7B92DBA8003',
    Date: '1635660896',
    Location: 'JI',
    Severity: 3,
    Description: 'In scelerisque scelerisque dui. Suspendisse',
  },
  {
    Index: '369F8221-3A6F-358D-73BC-7B6C7B4EF2AB',
    Date: '1599706666',
    Location: 'ST',
    Severity: 2,
    Description: 'Cum sociis natoque penatibus et magnis',
  },
  {
    Index: 'AA2566DB-748C-5CE6-4538-742D8E96CE49',
    Date: '1619541298',
    Location: 'Jönköpings län',
    Severity: 3,
    Description: 'Integer tincidunt aliquam arcu. Aliquam ultrices',
  },
  {
    Index: '39BF464C-2EBB-C37A-2E92-B0B9577BE3E0',
    Date: '1643687041',
    Location: 'Bayern',
    Severity: 4,
    Description:
      'molestie arcu. Sed eu nibh vulputate mauris sagittis placerat.',
  },
  {
    Index: '310C4E95-6F8E-7C51-4252-3B52C399C16E',
    Date: '1630106447',
    Location: 'WP',
    Severity: 2,
    Description:
      'ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo',
  },
  {
    Index: 'B938CCA4-F093-AA7F-6157-5B18334347D6',
    Date: '1640463398',
    Location: 'Odisha',
    Severity: 3,
    Description: 'Nunc lectus pede, ultrices a, auctor non,',
  },
  {
    Index: '379D6A87-6BCD-D91B-CC67-513A7729B177',
    Date: '1634760628',
    Location: 'Gloucestershire',
    Severity: 2,
    Description: 'blandit viverra. Donec',
  },
  {
    Index: 'D6518B0E-2219-95FE-191A-39CF04DA6ABC',
    Date: '1609070745',
    Location: 'BE',
    Severity: 5,
    Description: 'ullamcorper viverra. Maecenas iaculis',
  },
  {
    Index: 'D9CD79F4-27FE-0BCD-326F-622189D2AF60',
    Date: '1607903294',
    Location: 'Atlántico',
    Severity: 2,
    Description: 'purus. Nullam scelerisque neque sed sem egestas',
  },
  {
    Index: '99348B04-6548-F805-8136-F0EA69F61128',
    Date: '1601298998',
    Location: 'KP',
    Severity: 3,
    Description: 'ullamcorper viverra. Maecenas',
  },
  {
    Index: '1F7F3109-888A-9ECF-3A45-8B7AAE63EDD7',
    Date: '1601087000',
    Location: 'QC',
    Severity: 3,
    Description: 'ultricies ornare, elit elit fermentum risus,',
  },
  {
    Index: '74928A0B-AF54-957A-3156-7954CB3D078E',
    Date: '1639636818',
    Location: 'Noord Brabant',
    Severity: 5,
    Description: 'iaculis odio. Nam interdum enim non nisi. Aenean eget metus.',
  },
  {
    Index: '24F474F8-8C18-9F23-174C-84EB26F12EA7',
    Date: '1638324791',
    Location: 'Nebraska',
    Severity: 3,
    Description: 'enim',
  },
  {
    Index: '4BDE30E9-E049-E738-B070-71DA4F82151D',
    Date: '1634949092',
    Location: 'Gye',
    Severity: 1,
    Description: 'pede sagittis augue, eu tempor erat neque',
  },
  {
    Index: '1168EA14-CBBC-1C66-8EF4-22B7DAD17980',
    Date: '1628918315',
    Location: 'Chu',
    Severity: 1,
    Description: 'vulputate, nisi sem semper erat,',
  },
  {
    Index: '03464876-CF58-C0DB-B549-A2D921A2FC97',
    Date: '1597900278',
    Location: 'Gyeonggi',
    Severity: 4,
    Description: 'non, cursus',
  },
  {
    Index: 'D93980B8-7C9A-A556-9504-A8EDBC918047',
    Date: '1593498673',
    Location: 'Östergötlands län',
    Severity: 4,
    Description: 'ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce',
  },
  {
    Index: '89690BB0-2A91-6CCD-4B46-302DEA8D6C49',
    Date: '1600967103',
    Location: 'Chi',
    Severity: 4,
    Description: 'amet nulla. Donec non justo. Proin',
  },
  {
    Index: 'C0F41AAD-02E0-9C17-5AA7-F51822521568',
    Date: '1625964524',
    Location: 'TX',
    Severity: 1,
    Description: 'mi tempor lorem, eget mollis lectus pede et',
  },
  {
    Index: 'E15F8C02-807D-5D02-2B16-3FECB48E6CEE',
    Date: '1648393569',
    Location: 'Gye',
    Severity: 1,
    Description: 'convallis',
  },
  {
    Index: '3E898683-B0BB-F68F-86B0-6039CA89ECA1',
    Date: '1622301881',
    Location: 'Sachsen',
    Severity: 1,
    Description: 'arcu.',
  },
  {
    Index: 'CCEB20DD-E8A0-A7A0-8897-8421968FF560',
    Date: '1642976862',
    Location: 'LAM',
    Severity: 4,
    Description: 'Maecenas ornare egestas ligula.',
  },
  {
    Index: '689F9BA1-7BC3-3DA9-C5C5-ED91EA74B8AB',
    Date: '1594161916',
    Location: 'RF',
    Severity: 2,
    Description: 'sit amet, consectetuer adipiscing elit.',
  },
  {
    Index: '3B74DEB4-EBA8-BC4F-C93D-90F77C400A9F',
    Date: '1616010789',
    Location: 'Andhra Pradesh',
    Severity: 5,
    Description:
      'ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas',
  },
  {
    Index: '30B5BAD1-93A5-41F3-3E00-30DEEDE74453',
    Date: '1593259620',
    Location: 'Quebec',
    Severity: 4,
    Description: 'non enim commodo hendrerit. Donec porttitor tellus non',
  },
  {
    Index: '14CA3C8A-D6C8-B570-05AF-A0A835544B7E',
    Date: '1616772310',
    Location: 'U',
    Severity: 1,
    Description: 'lorem ut',
  },
  {
    Index: 'D7CD5BAA-1977-64CD-8657-EAD2C3B1BD39',
    Date: '1608368160',
    Location: 'TAS',
    Severity: 4,
    Description: 'ridiculus mus.',
  },
  {
    Index: '034D7417-38E0-84A6-8363-0D85C1F4F44E',
    Date: '1628392391',
    Location: 'Gye',
    Severity: 3,
    Description: 'Nam',
  },
  {
    Index: 'DB000FA4-BC88-5FE5-D336-5434E831C065',
    Date: '1647002009',
    Location: 'Mic',
    Severity: 3,
    Description: 'nec orci. Donec nibh.',
  },
  {
    Index: 'E94C9BE9-9014-F41F-B764-D4BDF9AAD8D1',
    Date: '1592778159',
    Location: 'Quebec',
    Severity: 2,
    Description: 'montes, nascetur',
  },
  {
    Index: 'B20126B8-09AD-F3FF-74ED-B77842834B0C',
    Date: '1631271060',
    Location: 'Ontario',
    Severity: 5,
    Description: 'Morbi vehicula. Pellentesque tincidunt tempus risus.',
  },
  {
    Index: 'AD96A3A0-1AF8-394D-3D1D-E4537067C9BB',
    Date: '1629582914',
    Location: 'X',
    Severity: 2,
    Description: 'et netus',
  },
  {
    Index: 'D2BBCB61-893A-B9D4-0B59-9D183D702E35',
    Date: '1596482281',
    Location: 'Lanarkshire',
    Severity: 1,
    Description: 'pede nec ante blandit viverra. Donec',
  },
  {
    Index: 'E4FEBD4A-666D-B180-334E-FB3E79182FC2',
    Date: '1638716136',
    Location: 'Munster',
    Severity: 4,
    Description: 'a neque. Nullam',
  },
  {
    Index: '0D634C12-7492-E00E-8B16-F08D568C5135',
    Date: '1643424015',
    Location: 'IA',
    Severity: 1,
    Description: 'Quisque purus sapien, gravida non, sollicitudin a, malesuada',
  },
  {
    Index: '33D4A3BC-9B69-617D-8543-33B0F2856411',
    Date: '1615130446',
    Location: 'KT',
    Severity: 1,
    Description:
      'Donec consectetuer mauris id sapien. Cras dolor dolor, tempus',
  },
  {
    Index: 'AE72FD3F-BD09-047E-3AF9-A3A5E6B3A8A4',
    Date: '1620997216',
    Location: 'Santa Catarina',
    Severity: 3,
    Description: 'turpis nec mauris blandit',
  },
  {
    Index: 'B99432F8-6785-D05C-8938-09B7325A97D3',
    Date: '1633229635',
    Location: 'Vienna',
    Severity: 4,
    Description: 'Fusce feugiat. Lorem ipsum dolor sit amet,',
  },
  {
    Index: 'A7AEA4A8-64AD-8A72-EE8A-02F0D2D7A6D2',
    Date: '1637170169',
    Location: 'Nuevo León',
    Severity: 3,
    Description: 'elementum',
  },
  {
    Index: '6FEC892A-7490-0953-866F-A2983387E56A',
    Date: '1626894369',
    Location: 'BO',
    Severity: 1,
    Description: 'urna justo faucibus',
  },
  {
    Index: 'E03AF9DE-4A9E-3361-0908-4E19CDFAD1AA',
    Date: '1616969057',
    Location: 'PIU',
    Severity: 4,
    Description: 'sociis natoque penatibus et magnis dis parturient montes,',
  },
  {
    Index: 'EFAD1D15-6E33-7B5F-8D45-9CFC6A8D2CB6',
    Date: '1645698985',
    Location: 'CE',
    Severity: 5,
    Description: 'facilisis. Suspendisse commodo',
  },
  {
    Index: 'BF2919D7-175D-0008-E21E-E087D9EBC45E',
    Date: '1619096514',
    Location: 'BA',
    Severity: 3,
    Description: 'neque.',
  },
  {
    Index: '8B2F3CE8-BE09-B77E-3BE4-91036869B988',
    Date: '1634033914',
    Location: 'Gl',
    Severity: 5,
    Description: 'Suspendisse sagittis. Nullam vitae',
  },
  {
    Index: '09EE6E0A-FD72-0E57-9D3B-DD73EC85624F',
    Date: '1630961348',
    Location: 'NI',
    Severity: 3,
    Description: 'Duis sit amet diam eu dolor egestas',
  },
  {
    Index: 'E8802366-1E86-C4D0-832E-40A69856AB97',
    Date: '1642769911',
    Location: 'Connacht',
    Severity: 5,
    Description: 'purus. Maecenas libero est, congue',
  },
  {
    Index: '837C3279-34C8-7EFF-1F19-E03BAA43E79D',
    Date: '1630874875',
    Location: 'Konya',
    Severity: 4,
    Description: 'Nunc lectus pede, ultrices a, auctor',
  },
  {
    Index: '5514D092-69D0-C5EF-3763-9CF02338A4E5',
    Date: '1620045476',
    Location: 'Jambi',
    Severity: 5,
    Description: 'vulputate, lacus. Cras interdum. Nunc sollicitudin',
  },
  {
    Index: '236500A1-5B6B-AD08-DFCE-EC8D7A98530E',
    Date: '1646880854',
    Location: 'BA',
    Severity: 3,
    Description: 'diam. Proin dolor. Nulla semper tellus id nunc interdum',
  },
  {
    Index: '40A33C5B-3284-510A-3BE1-36F2BB5D3FFF',
    Date: '1603216975',
    Location: 'Alajuela',
    Severity: 5,
    Description: 'ultrices a, auctor non, feugiat',
  },
  {
    Index: '4FAFC0EE-EA66-93B0-5385-B99E73E49317',
    Date: '1610718002',
    Location: 'Hamburg',
    Severity: 2,
    Description: 'scelerisque mollis. Phasellus libero mauris, aliquam eu,',
  },
  {
    Index: '1C695FF6-1686-4123-A3C5-FC78C216BF0E',
    Date: '1644586441',
    Location: 'Bahia',
    Severity: 4,
    Description: 'iaculis aliquet diam. Sed diam lorem, auctor quis, tristique',
  },
  {
    Index: '903200F2-D510-E9DB-F818-4A0361704802',
    Date: '1606152699',
    Location: 'Ontario',
    Severity: 5,
    Description: 'Proin vel arcu eu odio tristique pharetra. Quisque ac libero',
  },
  {
    Index: '3733CE3C-75B1-433D-F032-1DCF3F0DDAA7',
    Date: '1646421437',
    Location: 'PUG',
    Severity: 3,
    Description: 'laoreet, libero et tristique pellentesque, tellus sem mollis',
  },
  {
    Index: '217DF4BA-020D-5634-8162-AF1F1C61D19C',
    Date: '1630782046',
    Location: 'AN',
    Severity: 1,
    Description: 'ac risus.',
  },
  {
    Index: 'FB9494E5-EBC0-05B7-1595-09C82B90916C',
    Date: '1616509350',
    Location: 'Montana',
    Severity: 2,
    Description: 'Cum sociis',
  },
  {
    Index: '8430F2B0-28CA-C7A2-947C-F82C759CECBC',
    Date: '1631342188',
    Location: 'Pomorskie',
    Severity: 3,
    Description: 'risus, at fringilla',
  },
  {
    Index: '840692FE-40CA-96E4-2D76-101C1D2C565D',
    Date: '1595950082',
    Location: 'ARE',
    Severity: 5,
    Description: 'consequat nec, mollis vitae, posuere at, velit. Cras lorem',
  },
  {
    Index: '9C51B1ED-F33C-9465-3FC4-EFBCC13DDAD2',
    Date: '1654660776',
    Location: 'NI',
    Severity: 3,
    Description: 'magna. Duis dignissim tempor arcu. Vestibulum ut',
  },
  {
    Index: 'D5AD40A8-A152-2D57-F4C0-4DB2ACA67352',
    Date: '1635705511',
    Location: 'Saskatchewan',
    Severity: 5,
    Description:
      'Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.',
  },
  {
    Index: '380FFB6E-6BF8-52C7-7A2A-DB8A2E33D851',
    Date: '1615494798',
    Location: 'Wie',
    Severity: 3,
    Description:
      'molestie in, tempus eu, ligula. Aenean euismod mauris eu elit.',
  },
  {
    Index: '30BC5DE6-B3D7-FC52-041C-1B005EEED307',
    Date: '1633191094',
    Location: 'Waals-Brabant',
    Severity: 2,
    Description: 'sit amet',
  },
  {
    Index: 'CCE0D198-F66E-05B8-6409-DA30A4D8AC1F',
    Date: '1654040745',
    Location: 'BRY',
    Severity: 1,
    Description:
      'vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras',
  },
  {
    Index: '52F4B001-76F1-AB24-0FE1-4B3CDACCB3F6',
    Date: '1602805548',
    Location: 'MA',
    Severity: 3,
    Description: 'orci, consectetuer euismod est arcu ac orci. Ut',
  },
  {
    Index: 'A8D1E9AF-20FC-7073-3277-076E68F72E11',
    Date: '1646409166',
    Location: 'CA',
    Severity: 1,
    Description: 'lectus ante dictum mi, ac',
  },
  {
    Index: '8C990392-2637-F226-12ED-892B78E6F759',
    Date: '1647719579',
    Location: 'İzm',
    Severity: 4,
    Description: 'augue malesuada malesuada. Integer id magna et ipsum',
  },
  {
    Index: '97E9386E-9040-A49A-50BE-F3D15699F606',
    Date: '1604958982',
    Location: 'Maharastra',
    Severity: 1,
    Description: 'Donec tempor,',
  },
  {
    Index: '227C5DD2-9FB8-4343-1085-36A9225940D7',
    Date: '1622332582',
    Location: 'JT',
    Severity: 1,
    Description: 'vulputate',
  },
  {
    Index: '19A8884A-E291-DEF5-4CC7-B5DC1E75B747',
    Date: '1606120773',
    Location: 'RM',
    Severity: 5,
    Description: 'non enim commodo hendrerit. Donec',
  },
  {
    Index: '5C16C124-1EA4-AF91-626B-EDB4CAD0741E',
    Date: '1613619710',
    Location: 'Rostov Oblast',
    Severity: 1,
    Description: 'tincidunt vehicula risus.',
  },
  {
    Index: 'EDB67B4D-C820-C54C-C4D6-DE49B11C9BBB',
    Date: '1593928814',
    Location: 'ON',
    Severity: 3,
    Description: 'metus. In nec orci. Donec nibh. Quisque nonummy ipsum non',
  },
  {
    Index: 'EA29E9B7-7518-AF9C-F466-FAE94C590ACF',
    Date: '1646624054',
    Location: 'Västra Götalands län',
    Severity: 3,
    Description: 'lorem semper',
  },
];
const demoTableHeaders = Object.keys(demoTableData[0]);

const TemplateDemo = () => {
  return (
    <>
      <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
      <div className={`${storyClass}__app`}>
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="IBM">
            Cloud Cognitive application
          </HeaderName>
        </Header>
        <div
          className={`${storyClass}__content-container`}
          style={{
            // stylelint-disable-next-line carbon/layout-token-use
            marginTop: '48px',
          }}>
          <PageHeader
            breadcrumbOverflowLabel="Open and close additional breadcrumb item list."
            breadcrumbItems={
              <>
                <BreadcrumbItem href="../../../hompepage">
                  Homepage
                </BreadcrumbItem>
                <BreadcrumbItem href="../../Reports">Reports</BreadcrumbItem>
                <BreadcrumbItem href="../June2021">June 2021</BreadcrumbItem>
              </>
            }
            actionBarItems={[
              { key: '1', renderIcon: Printer16, iconDescription: `Print` },
              { key: '2', renderIcon: Settings16, iconDescription: `Settings` },
              { key: '3', renderIcon: VolumeMute16, iconDescription: `Mute` },
            ]}
            actionBarOverflowLabel="Show more action bar items"
            title={{
              text: 'Authentication activity',
              loading: false,
              icon: Security24,
            }}
            preventBreadcrumbScroll
            pageHeaderOffset={48} // 48px is the size of the global header. A more elegant way of passing this could be found.
            pageActions={[
              {
                kind: 'secondary',
                label: 'Acknowledge',
                onClick: () => {},
              },
              {
                kind: 'primary',
                label: 'Escalate',
                onClick: () => {},
              },
            ]}
            subtitle="This report details the monthly authentication failures"
            availableSpace={
              <>
                <p>Severity 1: 0</p>
                <p>Severity 1: 814</p>
                <p>Severity 3: 3,108</p>
              </>
            }
            navigation={
              <Tabs>
                <Tab label="Summary" />
                <Tab label="Region 1" />
                <Tab label="Region 2" />
                <Tab label="Region 3" />
              </Tabs>
            }
            tags={[
              {
                type: 'cyan',
                label: 'Not urgent',
              },
              {
                type: 'red',
                label: 'Security',
              },
            ]}
          />
          {
            <Grid className={`${storyClass}__dummy-content`} narrow={true}>
              <Row>
                <Column
                  sm={4}
                  md={8}
                  lg={16}
                  className={`${storyClass}__dummy-content-block`}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {demoTableHeaders.map((header) => (
                          <TableHeader key={header}>{header}</TableHeader>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {demoTableData.map((row) => (
                        <TableRow key={row.Index}>
                          {Object.keys(row).map((key) => {
                            return <TableCell key={key}>{row[key]}</TableCell>;
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>{' '}
                </Column>
              </Row>
            </Grid>
          }
        </div>
      </div>
    </>
  );
};

export const PageHeaderDemo = TemplateDemo.bind({});
