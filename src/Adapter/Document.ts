export interface Document {
    setContent(content: string): void;

    draw(): void;

    print(): void;
}
