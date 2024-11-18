import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'heavyComputation', standalone: true, pure: true})
export class HeavyComputationPipe implements PipeTransform {
  transform(name: string, index: number) {
    return `${name} - ${index}`;
  }
}