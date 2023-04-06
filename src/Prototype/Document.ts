export abstract class Document {
    name: string;
    content: string | undefined;

    protected constructor(name: string) {
        this.name = name;
    }

    clone(): Document {
        return Object.create(this);
    }

    print(): void {
        console.log("Document: print");
    }

    display(): void {
        console.log(`${this.name}: display ${this.content}`);
    }

    fill(content: string): void {
        this.content = content;
    }
}
