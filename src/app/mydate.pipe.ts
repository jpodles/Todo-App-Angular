import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pl';
@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {
  transform(date: number): string {
    let formatDate = moment(date).format('dd DD/MM/YY, HH:mm |');
    let stringDate = moment(date).toNow().slice(3) + " temu";

    if (stringDate == "1 dzień temu")
      stringDate = 'wczoraj';
    if (stringDate == "7 dni temu")
      stringDate = 'tydzień temu';
    if (stringDate == "14 dni temu")
      stringDate = '2 tygodnie temu';
    if (stringDate == "21 dni temu")
      stringDate = '3 tygodnie temu';

    return formatDate + " " + stringDate;
  }
}
