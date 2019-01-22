const csv = {
  csvExport(colleges) {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += [
      Object.keys(colleges[0]).join(','),
      ...colleges.map(item => Object.values(item).join(',')),
    ]
      .join('\n')
      .replace(/(^\[)|(\]$)/gm, '');

    const data = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', 'export.csv');
    link.click();
  },
};

export default csv;
