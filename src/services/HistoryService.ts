export class HistoryService {
  private conditionFn: (url: string) => boolean;

  unblock() {
    this.conditionFn = null;
  }

  block(conditionFn: (url: string) => boolean): () => void {
    this.conditionFn = conditionFn;

    return () => {
      this.conditionFn = null;
    };
  }
}

export const historyService = new HistoryService();
