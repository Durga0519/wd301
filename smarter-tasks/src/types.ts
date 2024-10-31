export interface TaskItem<T = string> {
  // Default to 'string' for flexibility
  id: T;
  title: string;
  description?: string;
  dueDate: string;
}
