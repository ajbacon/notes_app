'use strict'

// var element = document.getElementById('app')
// console.log(element)

// document.addEventListener('click', (event) => {
//   element.innerHTML = 'Howdy, Harry!'
// })

function NoteController(noteList) {
  this.noteList = noteList
}

NoteController.prototype = (function () {
  function addNote(text) {
    this.noteList.createNote(text)
  }

  function createNoteListView() {
    var noteListView = new NoteListView(this.noteList)
    var element = document.getElementById('app')
    console.log(noteListView)
    var noteHTML = noteListView.toHTML(this.noteList)
    element.innerHTML = noteHTML
  }

  return {
    addNote: addNote,
    createNoteListView: createNoteListView
  }
})()


