const openTab = (URL) => {
  const w = window.open('about:blank', '_blank');
  w.document.write(`<html><body><img src=${URL}></body></html>`);
  w.print();
  w.close();
};

export default openTab;
