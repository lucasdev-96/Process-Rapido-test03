const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const readLink = async () => {
  const dom = await JSDOM.fromURL('http://omnissolucoes.com/teste3/');
  const nodeList = [...dom.window.document.querySelectorAll('li')];
  console.log(nodeList.map((elem) => {
    const nomeDosArquivos = elem.textContent.replace(/\n|\t/g, '');
    const a = elem.querySelector('a');
    const urlDosArquivos = a.href;
    const codigo = a.getAttribute('codigo');
    return { nomeDosArquivos, urlDosArquivos, codigo };
  }));
};

readLink();
