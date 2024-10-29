export interface IState {
    onEnter?(): void;
    onExit?(): void;
    getTransitions(): Map<string, () => void>;
}