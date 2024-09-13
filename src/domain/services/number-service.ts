export abstract class INumberService {
    abstract sum(a: number, b: number): Promise<number>;
    abstract divide(a: number, b: number): Promise<number>;
}
