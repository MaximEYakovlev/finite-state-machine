export interface IStateMachine {
    getState(): string;
    dispatch(action: string): void;
}