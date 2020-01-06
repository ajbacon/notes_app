(function (exports) {
  function outputHTMLString () {
    var noteList = new NoteList()
    noteList.createNote('this is a note')
    noteList.createNote('this is a second note')
    var noteListView = new NoteListView(noteList)

    return assert.isTrue(noteListView.toHTML() === '<ul><li><div>this is a note</div></li><li><div>this is a second note</div></li></ul>')
  }
  exports.outputHTMLString = outputHTMLString
})(this)

console.log(outputHTMLString())
