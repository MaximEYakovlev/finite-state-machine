export interface IStateMachine {
    getState(): string;
    gispatch(action: string): void;
}