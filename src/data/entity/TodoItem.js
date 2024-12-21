export function TodoItem(id, title, isDone, priority = 'low') {
  this.id = id;
  this.title = title;
  this.isDone = isDone;
  this.priority = priority;
}
