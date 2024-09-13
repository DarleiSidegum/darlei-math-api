export abstract class INumbersService {
    abstract sum(numbers: number[]): Promise<number>;
    abstract average(numbers: number[]): Promise<number>;
}
