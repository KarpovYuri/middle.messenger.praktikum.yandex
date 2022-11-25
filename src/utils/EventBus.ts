// Класс шины событий

class EventBus {

  // Объект событий
  private readonly listeners: Record<string, ((...args: unknown[]) => void)[]> = {};

  // Подписка на событие
  on(event: string, callback: () => void) {
    // Проверка события
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    // Добавление события
    this.listeners[event].push(callback);
  }

  // Отписка от события
  off(event: string, callback: () => void) {
    this._checkEvent(event);
    // Удаление события
    this.listeners[event] = this.listeners[event]
      .filter(listener => listener !== callback);
  }

  // Запуск события
  emit(event: string, ...args: unknown[]) {
    this._checkEvent(event);
    this.listeners[event].forEach(listener => {
      listener(...args);
    });
  }

  // Проверка события
  _checkEvent(event: string) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
}

export default EventBus;
