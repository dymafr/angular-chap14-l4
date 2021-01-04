import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], search: string): string[] {
    return value.filter(val => val.includes(search));
  }
}
