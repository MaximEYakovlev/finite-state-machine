export interface IStateMachine {
    setState(state: string): void;
    getState(): string;
    dispatch(action: string): void;
}