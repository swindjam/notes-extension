import React from 'react';
import ReactDOM from 'react-dom';
import NotesExtension from './react/NotesExtension';

//Chrome extension needs to be wrapped inside dom content loaded - else document is null
document.addEventListener('DOMContentLoaded', () => {
  let notes = JSON.parse(window.localStorage.getItem('notes')) || [];

  ReactDOM.render(
    <NotesExtension {...{notes}} />, document.querySelector('#main'));

  const created = window.localStorage.getItem('contextMenuCreated', 1);

  //Create context menu item - id makes it unique. Without an id it will be added every time the icon is clicked
  if (!created) {
    chrome.contextMenus.create({
      id: 'saveAsNote',
      title: 'Save as Note',
      contexts: ['selection'],
      type: 'normal',
    }, () => {
      window.localStorage.setItem('contextMenuCreated', 1);

      //Add on click listener to check when the context menu is clicked
      chrome.contextMenus.onClicked.addListener(event => {
        console.log(event)
        if(event.menuItemId === 'saveAsNote') {
          //Store the note
          notes.push(event.selectionText);
          window.localStorage.setItem('notes', JSON.stringify(notes));
        }
      });
    });
  }
});
