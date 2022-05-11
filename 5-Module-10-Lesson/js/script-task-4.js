// Напиши клас Notes, який управляє колекцією нотаток у властивості items.
// Нотатка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.

// Додай методи addNote(note), removeNote(text) и updatePriority(text, newPriority).

class Note {
  static Priority = {
    LOW: 1,
    NORMAL: 2,
    HIGH: 3,
  };

  constructor(text, priority) {
    this.text = text;
    this.priority = priority;
  }
}

const firstNote = new Note('make a picture', Note.Priority.LOW);
const secondNote = new Note('open web site', Note.Priority.HIGH);
const thirdNote = new Note('do home tasks', Note.Priority.NORMAL);

class Notes {
  #notes = [];

  addNote(note) {
    this.#notes.push(note);
  }

  removeNote(text) {
    const index = this.#notes.findIndex(n => n.text === text);
    if (index > -1) {
      this.#notes.splice(index, 1);
    }
  }

  updatePriority(text, priority) {
    const index = this.#notes.findIndex(n => n.text === text);
    if (index > -1) {
      this.#notes[index].priority = priority;
    }
  }

  get notes() {
    return this.#notes;
  }
}

const myNotes = new Notes();

myNotes.addNote(firstNote);
myNotes.addNote(secondNote);
myNotes.addNote(thirdNote);

console.table(myNotes.notes);

myNotes.removeNote('open web site');

console.table(myNotes.notes);
myNotes.updatePriority('do home tasks', 3);

console.table(myNotes.notes);
