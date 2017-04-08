import React from 'react';

function parseParagraph(contentObj) {
  return contentObj;
}

function parseMultiLine(contentObj) {
  let items = [];
  for(let key in contentObj) {
    if(key === 'lede' || key === 'type') {
      continue;
    }

    items.push((<p key={key}>{contentObj[key]}</p>));
  }

  return items;
}

function parseList(contentObj) {
  let items = [];
  for(let key in contentObj) {
    if(key === 'lede' || key === 'type') {
      continue;
    }

    items.push((<li key={key}>{contentObj[key]}</li>));
  }

  return items;
}

export function handleContent(contentObj) {
  let renderData;

  switch(contentObj.type) {
    case 'paragraph':
      renderData = parseParagraph(contentObj);
      break;
    case 'multi-line':
      renderData = parseMultiLine(contentObj);
      break;
    case 'list':
      renderData = parseList(contentObj);
      break;
    default:
      console.log('hit default')
      renderData = null;
  }

  return renderData;
}
