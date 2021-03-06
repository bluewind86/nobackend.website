import 'hightlight.css'
import hljs from 'highlight.js'

export default function config(markedProvider, cfpLoadingBarProvider) {
  "ngInject";

  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlight('javascript', code).value;
      }
    }
  });

  markedProvider.setRenderer({
    link(href, title, text) {
      return `<a href="${href}" ${title ? 'title="' + title + '"' : ''} target="_blank">${text}</a>`;
    },
    blockquote(quote) {
      if (quote.indexOf('<blockquote>') > -1) {
        return `<blockquote class="english-ref">${quote}</blockquote>`;
      } else {
        return `<blockquote>${quote}</blockquote>`;
      }
    },
    heading(text, level) {
      const [englishTitle, chineseTitle] = text.split(' | ')
      return chineseTitle === undefined ? `<h${level}>${englishTitle}</h${level}>` :
        `<h${level}><span class="english-title">${englishTitle} | </span>${chineseTitle}</h${level}>`
    }
  });

  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = `<div class="uac-loader uac-loader-sail"><span></span><span></span><span></span><span></span></div>`;
}