import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform (value, queryString:string) {
  //	debugger
    if (value==null || value=="") {
      return null;
    }

    if(queryString !== undefined){
        return   value.filter(item=>item.description.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)         ;
    }else{
        return value;
    }
  }
}


