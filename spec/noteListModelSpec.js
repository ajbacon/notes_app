(function (exports) {
  function createNoteAddsNewNoteToList () {
    var noteList = new NoteList()
    noteList.createNote('this is a note')

    return assert.isTrue(noteList.showNotes()[0] instanceof Note)
  }
  exports.createNoteAddsNewNoteToList = createNoteAddsNewNoteToList
})(this)

console.log(createNoteAddsNewNoteToList())
